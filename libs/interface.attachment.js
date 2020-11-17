const ItemInterface = require("./interface.item");
const assert = require("assert").strict;
module.exports = class AttachmentInterface extends ItemInterface {
  constructor(args) {
    super(args);
    console.log(this.data);
  }
};
