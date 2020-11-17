const assert = require("assert").strict;

module.exports = ({ image: icon }) => {
  assert(icon, "No icon information found");
  assert(icon.url._text, "No icon url found");
  assert(icon.title._text, "No icon title found");
  assert(icon.link._text, "No icon link found");
  assert(icon.width._text, "No icon width found");
  assert(icon.height._text, "No icon height found");

  return {
    url: icon.url._text,
    title: icon.title._text,
    link: icon.link._text,
    width: icon.width._text,
    height: icon.height._text,
  };
};
