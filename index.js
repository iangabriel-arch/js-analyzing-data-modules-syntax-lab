Task 2, Step 1: Create combineUsers function with rest arguments
*/
function combineUsers(...args) {
// Step 2: Initialize the Return Object
const combinedObject = {
 users: []
}; // Step 3: Loop through args to isolate each array
for (let i = 0; i < args.length; i++) {
 const currentArray = args[i];  // Step 4: Merge Arrays using the spread operator
 // We spread the current contents and the new array into a new array
 combinedObject.users = [...combinedObject.users, ...currentArray];
} // Step 5: Get today's date in M/d/yyyy format
// datejs allows us to use the .toString() method with custom formatting
combinedObject.merge_date = new Date().toString('M/d/yyyy'); // Step 7: Return object
return combinedObject;
}
// Export the function for the Jest test suite
module.exports = combineUsers;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',

        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"

        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]
}

// Write your code here!
const bookStoreTitle = document.querySelector('#header');
bookStoreTitle.textContent = bookStore.name;

const bookList = document.querySelector('#book-list')

//loop
bookStore.books.forEach(book => {
    const bookContainer = document.createElement('li')
    //creating elements
    const bookTitle = document.createElement('h3')
    bookTitle.textContent = book.title
    const bookAuthor = document.createElement('p')
    bookAuthor.textContent = by ${book.author}
    const bookImage = document.createElement('img')
    bookImage.src = book.imageUrl

//appending elements
bookContainer.append(bookTitle)
bookContainer.append(bookAuthor)
bookContainer.append(bookImage)

//appending container to book list
bookList.append(bookContainer)
});




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};