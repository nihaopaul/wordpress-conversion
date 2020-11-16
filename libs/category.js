const assert = require("assert").strict;

module.exports = class Category {
  #category = {};
  constructor({
    "wp:term_id": id,
    "wp:category_nicename": nicename,
    "wp:category_parent": parent,
    "wp:cat_name": name,
    ...args
  }) {
    this.#category = {
      id,
      nicename,
      parent,
      name,
    };
    assert.deepStrictEqual(args, {}, "Should not be any remaining objects");
  }

  get id() {
    const number = new Number(this.#category.id._text);
    assert.Number(number);
    assert(number, "No defined category id");
    return number;
  }

  get nicename() {
    // URIencoded when working with URLS
    assert(this.#category.nicename._cdata, "Nicename does not exist");
    return decodeURI(this.#category.nicename._cdata);
  }

  get parent() {
    // can have no parent
    assert(this.#category.parent, "Cannot find the parent field");
    if (this.#category.parent._cdata) {
      return this.#category.parent._cdata;
    }
    return null;
  }

  get name() {
    assert(this.#category.name._cdata, "Cannot find the name field");
    return this.#category.name._cdata;
  }
};
