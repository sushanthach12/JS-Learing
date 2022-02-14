console.log('Exercise4 : Library');

// Library using Object Oriented PRogramming
// Implement : constructor must take the book list as an arguement ,getBookList() , issueBook(bookName, user) , returnBook(bookName)

class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, user){
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName] =  user;
        }
        else{
            console.log('Book is already issued');
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}