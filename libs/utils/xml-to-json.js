const assert = require("assert").strict;
const convert = require("xml-js");

module.exports = (xml) => {
  let options = { compact: true, ignoreComment: false, spaces: 2 };
  assert(xml, "No data provided");
  const str = convert.xml2json(xml, options);
  return JSON.parse(str);
};
