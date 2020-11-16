const assert = require("assert").strict;
module.exports = ({ description }) => () => {
  assert(description._text, "Description does not exist");
  return description._text;
};
