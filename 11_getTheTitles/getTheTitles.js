const getTheTitles = function(books) {
    const bookTitles = books.map((obj) => {
        return obj['title'];
    });
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
