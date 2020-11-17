const assert = require("assert").strict;
module.exports = ({ title }) => {
  assert(title._text, "Title does not exist");
  return title._text;
};
