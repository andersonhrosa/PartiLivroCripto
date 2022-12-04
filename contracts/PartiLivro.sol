//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PartiLivro {
    uint public bookCount = 0;

    struct Book {
        uint id;
        string content;
        bool completed;
        string author;
        string publishing;
        string pages;
        string date;
    }

    mapping(uint => Book) public books;

    event BookCreated(
        uint id,
        string content,
        bool completed,
        string author,
        string publishing,
        string pages,
        string date
    );

    event BookCompleted(
        uint id,
        bool completed
    );

    constructor() public {
        createBook("1986", "Jorge Orwell", "Editora Alpha", "416", "01/07/2009" );
    }

    function createBook(string memory _content, string memory _author, string memory _publishing, string memory _pages, string memory _date) public {
        bookCount ++;
        books[bookCount] = Book(bookCount, _content, false, _author, _publishing, _pages, _date);
        emit BookCreated(bookCount, _content, false, _author, _publishing, _pages, _date);
    }

    function toggleCompleted(uint _id) public {
    Book memory _book = books[_id];
    _book.completed = !_book.completed;
    books[_id] = _book;
    emit BookCompleted(_id, _book.completed);
  }
}

