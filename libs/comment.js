const assert = require("assert");
const Metadata = require("./metadata");
module.exports = class Comment {
  #data;
  constructor({
    "wp:comment_id": id,
    "wp:comment_author": author,
    "wp:comment_author_email": author_email,
    "wp:comment_author_url": author_url,
    "wp:comment_author_IP": author_IP,
    "wp:comment_date": date,
    "wp:comment_date_gmt": date_gmt,
    "wp:comment_content": content,
    "wp:comment_approved": approved,
    "wp:comment_type": type,
    "wp:comment_parent": parent,
    "wp:comment_user_id": user_id,
    "wp:commentmeta": commentmeta,
    ...args
  }) {
    assert.deepStrictEqual(args, {}, "Should not be any remaining objects");
    this.#data = {
      id,
      author,
      author_email,
      author_url,
      author_IP,
      date,
      date_gmt,
      content,
      approved,
      type,
      parent,
      user_id,
      commentmeta,
    };
  }
  get data() {
    // utility function to pass by reference to children
    return this.#data;
  }
  get id() {
    assert(this.data.id._text, "cannot find the ID");
    return Number(this.data.id._text);
  }
  get author() {
    assert(this.data.author._cdata, "cannot find the author");
    return decodeURI(this.data.author._cdata);
  }
  get author_email() {
    assert(this.data.author_email, "cannot find the authors email");
    return this.data.author_email._cdata || null;
  }
  get author_url() {
    assert(this.data.author_url, "cannot find the authors url");
    return this.data.author_url._text || null;
  }
  get author_IP() {
    assert(this.data.author_IP, "cannot find the authors IP");
    return this.data.author_IP._cdata || null;
  }
  get date() {
    return this.date_gmt;
  }
  get date_gmt() {
    assert(this.data.date_gmt._cdata, "Cannot find date_gmt");
    return new Date(`${this.data.date_gmt._cdata} GMT`);
  }
  get content() {
    assert(this.data.content._cdata, "Cannot find content");
    return this.data.content._cdata;
  }
  get approved() {
    assert(this.data.approved._cdata, "Cannot find approved");
    return this.data.approved._cdata === "1" ? true : false;
  }
  get type() {
    assert(this.data.type._cdata, "Cannot find type");
    return this.data.type._cdata;
  }
  get parent() {
    assert(this.data.parent._text, "Cannot find parent");
    return Number(this.data.parent._text);
  }
  get user_id() {
    assert(this.data.user_id._text, "Cannot find user_id");
    return Number(this.data.user_id._text);
  }
  get commentmeta() {
    if (!this.data.commentmeta) return [];
    return new Metadata(this.data.commentmeta);
  }
};
