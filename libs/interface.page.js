const ItemInterface = require("./interface.item");
const assert = require("assert").strict;
const Comments = require("./comments");
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
  get comments() {
    return new Comments(this.data.comments);
  }
};
