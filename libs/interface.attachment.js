const ItemInterface = require("./interface.item");
const assert = require("assert").strict;
module.exports = class AttachmentInterface extends ItemInterface {
  constructor(args) {
    super(args);
  }

  get category() {
    // doesnt exist
    return null;
  }

  get name() {
    // URI encoded
    assert(this.data.name._cdata, "Cannot find name");
    return decodeURI(this.data.name._cdata);
  }
  get attachment() {
    assert(this.data.attachment._cdata, "Cannot find attachment");
    return this.data.attachment._cdata;
  }
};
