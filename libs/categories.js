const assert = require("assert").strict;
const Category = require("./category");

module.exports = ({ "wp:category": categories }) => () => {
  assert(categories, "No categories");
  return categories.map((category) => new Category(category));
};
