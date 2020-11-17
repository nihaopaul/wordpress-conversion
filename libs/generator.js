const assert = require("assert").strict;
module.exports = ({ generator }) => {
  assert(
    generator._text,
    "Unable to find the wordpress version used to generate the document"
  );
  return generator._text;
};
