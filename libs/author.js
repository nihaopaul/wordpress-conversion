const assert = require("assert").strict;

module.exports = class Author {
  #profile = {};
  constructor({
    "wp:author_id": id,
    "wp:author_login": login,
    "wp:author_email": email,
    "wp:author_display_name": display_name,
    "wp:author_first_name": first_name,
    "wp:author_last_name": last_name,
  }) {
    this.#profile = {
      id,
      login,
      email,
      display_name,
      first_name,
      last_name,
    };
  }

  get id() {
    const number = new Number(this.#profile.id._text);
    assert.Number(number);
    assert(number, "No defined user id");
    if (!(number >= 0)) {
      assert.fail("Number is less than zero");
    }
    return number;
  }

  get login() {
    assert(this.#profile.login._cdata, "No login name defined");
    return this.#profile.login._cdata;
  }

  get email() {
    assert(this.#profile.email._cdata, "No email defined");
    return this.#profile.email._cdata;
  }

  get display_name() {
    assert(this.#profile.display_name._cdata, "No display name defined");
    return this.#profile.display_name._cdata;
  }

  get first_name() {
    assert(this.#profile.first_name._cdata, "First name not found");
    return this.#profile.first_name._cdata;
  }
  get last_name() {
    assert(this.#profile.last_name._cdata, "lLst name not found");
    return this.#profile.last_name._cdata;
  }
};
