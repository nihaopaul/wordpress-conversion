const assert = require("assert").strict;
const Tag = require("./tag");

module.exports = ({ "wp:tag": tags }) => () => {
  assert(tags, "No tags");
  return tags.map((tag) => new Tag(tag));
};
