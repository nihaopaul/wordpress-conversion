const assert = require("assert").strict;
module.exports = ({ language }) => () => {
  assert(language._text, "Language not defined");
  return language._text;
};
