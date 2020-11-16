const assert = require("assert").strict;
module.exports = class Tag {
  #tag = {};
  constructor({ "wp:term_id": id, "wp:tag_slug": slug, "wp:tag_name": name }) {
    this.#tag = {
      id,
      slug,
      name,
    };
  }

  get id() {
    const number = new Number(this.#tag.id._text);
    assert.Number(number);
    assert(number, "No defined tag id");
    return number;
  }
  get slug() {
    // uriEncoded
    assert(this.#tag.slug._cdata, "slug does not exist");
    return decodeURI(this.#tag.slug._cdata);
  }
  get name() {
    return this.#tag.name._cdata;
  }
};
