const ItemInterface = require("./interface.item");
const Comments = require("./comments");
const assert = require("assert").strict;
const XMLTOJSON = require("./utils/xml-to-json");

module.exports = class PostInterface extends ItemInterface {
  constructor(args) {
    super(args);
  }

  get contentEncoded() {
    assert(this.data.contentEncoded._cdata, "Unable to find contentEncoded");
    const xml = this.data.contentEncoded._cdata.join("");
    const json = XMLTOJSON(xml);
    return json._cdata || false;
  }

  get excerptEncoded() {
    assert(this.data.excerptEncoded._cdata, "Unable to find excerptEncoded");
    const xml = this.data.excerptEncoded._cdata.join("");
    const json = XMLTOJSON(xml);
    return json._cdata || false;
  }
  get password() {
    // assert(this.data.password._cdata, "Cannot find password");
    const { _cdata } = this.data.password;
    return _cdata || false;
  }
  get comments() {
    return new Comments(this.data.comments);
  }
};
