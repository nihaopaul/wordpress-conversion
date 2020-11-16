const assert = require("assert").strict;
module.exports = class Term {
  #term = {};
  constructor({
    "wp:term_id": id,
    "wp:term_taxonomy": taxonomy,
    "wp:term_slug": slug,
    "wp:term_name": name,
    "wp:term_parent": parent,
    ...args
  }) {
    this.#term = {
      id,
      taxonomy,
      slug,
      name,
      parent,
    };
    assert.deepStrictEqual(args, {}, "Should not be any remaining objects");
  }

  get id() {
    const number = new Number(this.#term.id._text);
    assert.Number(number);
    assert(number, "No term id");
    return number;
  }

  get taxonomy() {
    assert(this.#term.taxonomy._cdata, "No taxonomy field");
    return this.#term.taxonomy._cdata;
  }

  get slug() {
    // uriEncoded
    assert(this.#term.slug._cdata, "slug does not exist");
    return decodeURI(this.#term.slug._cdata);
  }
  get name() {
    assert(this.#term.name._cdata, "No name field");
    return this.#term.name._cdata;
  }

  get parent() {
    // can have no parent
    assert(this.#term.parent, "Cannot find the parent field");
    if (this.#term.parent._cdata) {
      return this.#term.parent._cdata;
    }
    return null;
  }
};
