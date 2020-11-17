const assert = require("assert").strict;
module.exports = ({ link }) => {
  assert(link._text, "Link does not exist");
  return link._text;
};
