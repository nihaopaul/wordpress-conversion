const assert = require("assert").strict;
const Term = require("./term");

module.exports = ({ "wp:term": terms }) => () => {
  assert(terms, "No terms");
  return terms.map((term) => new Term(term));
};
