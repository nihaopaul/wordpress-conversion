const assert = require("assert").strict;
/**
 * Returns the Title of the wordpress site
 * @name title
 * @returns {string} returns a string representation of the title
 * @example
 *  title // => 'Wordpress Title'
 */
module.exports = ({ title }) => {
  assert(title._text, "Title does not exist");
  return title._text;
};
