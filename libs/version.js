const SUPPORTED_VERSIONS = ["1.2"];
const assert = require("assert").strict;

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
