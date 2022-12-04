//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PartiLivro {
    uint public bookCount = 0;

    struct Book {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Book) public books;

    event BookCreated(
        uint id,
        string content,
        bool completed
    );

    event BookCompleted(
        uint id,
        bool completed
    );

    constructor() public {
        createBook("Check out partilivro.azurewebsites.net");
    }

    function createBook(string memory _content) public {
        bookCount ++;
        books[bookCount] = Book(bookCount, _content, false);
        emit BookCreated(bookCount, _content, false);
    }

    function toggleCompleted(uint _id) public {
    Book memory _book = books[_id];
    _book.completed = !_book.completed;
    books[_id] = _book;
    emit BookCompleted(_id, _book.completed);
  }
}

