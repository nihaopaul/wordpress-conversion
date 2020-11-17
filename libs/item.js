const assert = require("assert").strict;

const Interfaces = {
  attachment: require("./interface.attachment.js"),
  nav_menu_item: require("./interface.nav_menu_item"),
  page: require("./interface.page"),
  post: require("./interface.post"),
};

module.exports = class Item {
  #item = {};
  constructor({
    title,
    link,
    pubDate,
    "dc:creator": creator,
    guid,
    description,
    category,
    "content:encoded": contentEncoded,
    "excerpt:encoded": excerptEncoded,
    "wp:post_id": id,
    "wp:post_date": postDate,
    "wp:post_date_gmt": postDateGMT,
    "wp:comment_status": commentStatus,
    "wp:ping_status": pingStatus,
    "wp:post_name": name,
    "wp:status": status,
    "wp:post_parent": parent,
    "wp:menu_order": order,
    "wp:post_type": type,
    "wp:post_password": password,
    "wp:is_sticky": isSticky,
    "wp:attachment_url": attachment,
    "wp:postmeta": metadata,
    "wp:comment": comments,
    ...args
  }) {
    assert.deepStrictEqual(args, {}, "Should not be any remaining objects");

    this.#item = {
      title,
      link,
      pubDate,
      creator,
      guid,
      description,
      category,
      contentEncoded,
      excerptEncoded,
      id,
      postDate,
      postDateGMT,
      commentStatus,
      pingStatus,
      name,
      status,
      parent,
      order,
      type,
      password,
      isSticky,
      attachment,
      metadata,
      comments,
    };

    return this.child;
  }

  get type() {
    assert(this.#item.type._cdata, "cannot detect type");
    return this.#item.type._cdata;
  }

  get child() {
    assert(Interfaces, "cannot find interfaces");
    assert(Interfaces[this.type], `cannot find interface type ${this.type}`);
    return new Interfaces[this.type](this.#item);
  }
};
