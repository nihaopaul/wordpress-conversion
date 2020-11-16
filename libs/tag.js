const assert = require("assert").strict;
module.exports = class Tag {
  #tag = {};
  constructor({
    "wp:term_id": id,
    "wp:tag_slug": slug,
    "wp:tag_name": name,
    ...args
  }) {
    this.#tag = {
      id,
      slug,
      name,
    };
    assert.deepStrictEqual(args, {}, "Should not be any remaining objects");
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
    assert(this.#tag.name._cdata, "No name field");
    return this.#tag.name._cdata;
  }
};
