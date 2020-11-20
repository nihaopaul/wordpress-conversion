const SUPPORTED_VERSIONS = ["1.2"];
const assert = require("assert").strict;
/**
 * Returns the WXR version used to export from the wordpress site
 * @name title
 * @returns {string} returns a string with the WXR version number
 * @example
 *  version // => '1.2'
 */
module.exports = ({ "wp:wxr_version": version }) => {
  let isSupported = false;
  if (SUPPORTED_VERSIONS.includes(version._text)) {
    isSupported = true;
  }

  assert.strictEqual(
    isSupported,
    true,
    `Unsupported version detected ${version._text}`
  );

  return version._text;
};
