const ItemInterface = require("./interface.item");
const assert = require("assert").strict;
module.exports = class PageInterface extends ItemInterface {
  constructor(args) {
    super(args);
  }
  get category() {
    // doesn't exist
    return null;
  }
  get password() {
    const { _cdata } = this.data.password;
    return _cdata || false;
  }
};
