const assert = require("assert").strict;

module.exports = ({ "wp:base_site_url": wp_base_site_url }) => () => {
  assert(wp_base_site_url._text, "Base site url does not exist");
  return wp_base_site_url._text;
};
