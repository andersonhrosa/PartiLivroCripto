
App = {
    contracts: {},
    loading: false,

    load: async () => {
        await App.loadWeb3();
        await App.loadAccounts();
        await App.loadContract();
        await App.render();
    },
   
      // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
         window.addEventListener('load', async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            console.log("Loaded....")
            try {
                // Request account access if needed
                await ethereum.enable();
                // Acccounts now exposed
                web3.eth.sendTransaction({/* ... */});
            } catch (error) {
                // User denied account access...
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            // Acccounts always exposed
            web3.eth.sendTransaction({/* ... */});
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
        });
    },

    loadAccounts: async () => {
        // connect to all the accounts, we want index 0 since, its the first account
        // the account we are connected to
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        App.account = accounts[0];
        console.log(App.account);

    },

    loadContract: async () => {
        // create a JS version of the contracts
        const partiLivro = await $.getJSON('PartiLivro.json')
        App.contracts.PartiLivro = TruffleContract(partiLivro)
        App.contracts.PartiLivro.setProvider(new Web3.providers.HttpProvider("http://172.24.160.1:7545"));
        // console.log(partiLivro);

        // Hydrate the smart contract with values from the blockchain
        App.partiLivro = await App.contracts.PartiLivro.deployed()
    },

    render: async () => {
        if (App.loading) {
            return;
        }

        // Update app loading state
        App.setLoading(true)

        // Render Account
        $('#account').html(App.account)

        // Render Books
        await App.renderBooks()

        // Update loading state
        App.setLoading(false)
        },


    renderBooks: async () => {
        // load all the books from the blockchain
        const bookCount = await App.partiLivro.bookCount();
        const $tackTemplate = $(".bookTemplate");

        // render each of the books
        for (var i = 1; i <= bookCount; i++){
            const book = await App.partiLivro.books(i);
            const book_id = book[0].toNumber();
            const book_content = book[1];
            const book_completed = book[2];

            // Create the html for the book
            const $newBookTemplate = $tackTemplate.clone()
            $newBookTemplate.find('.content').html(book_content)
            $newBookTemplate.find('input')
                            .prop('name', book_id)
                            .prop('checked', book_completed)
                            .on('click', App.toggleCompleted)
    
            // Put the book in the correct list
            if (book_completed) {
                $('#completedBookList').append($newBookTemplate)
            } else {
                $('#bookList').append($newBookTemplate)
            }
    
            // Show the book
            $newBookTemplate.show()
        }

    },


    setLoading: (boolean) => {
        App.loading = boolean;
        const loader = $('#loader');
        const content = $('#content');
        if (boolean) {
            loader.show();
            content.hide();
        } else {
            loader.hide();
            content.show();
        }
    },


    createBook: async () => {
        App.setLoading(true);
        const content = $('#newBook').val();
        await App.partiLivro.createBook(content, { from: App.account });
        window.location.reload();
    },


    toggleCompleted: async (e) => {
        App.setLoading(true)
        const bookId = e.target.name
        await App.partiLivro.toggleCompleted(bookId, { from: App.account });
        window.location.reload()
    },   
}

$(() => {
    $(window).load(() => {
        App.load();
    })
})