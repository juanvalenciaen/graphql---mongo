var {books} = require("../data");

module.exports = {
    Query: {
      books: () => books,
    },
  };