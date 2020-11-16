const assert = require("assert").strict;
const Author = require("./author");

module.exports = ({ "wp:author": authors }) => () => {
  assert(authors, "No authors");
  return authors.map((author) => new Author(author));
};
