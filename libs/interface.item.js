module.exports = class ItemInterface {
  constructor(args) {
    this.data = args;
  }

  get type() {
    return this.data._cdata;
  }
};
