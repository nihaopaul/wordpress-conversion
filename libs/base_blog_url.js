const assert = require("assert").strict;

module.exports = ({ "wp:base_blog_url": wp_base_blog_url }) => {
  assert(wp_base_blog_url._text, "Base blog url does not exist");
  return wp_base_blog_url._text;
};
