const ItemInterface = require("./interface.item");
const assert = require("assert").strict;
module.exports = class NavMenuItemInterface extends ItemInterface {
  constructor(args) {
    super(args);
  }

  get name() {
    assert(this.data.name._cdata, "Cannot find name");
    return decodeURI(this.data.name._cdata);
  }
};
