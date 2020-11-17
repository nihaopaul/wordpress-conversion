const assert = require("assert").strict;

module.exports = ({ pubDate }) => {
  assert(pubDate._text, "Publish date does not exist");
  return pubDate._text;
};
