const assert = require("assert").strict;

const Comment = require("./comment");

module.exports = class Comments {
  constructor(item) {
    return Array.isArray(item)
      ? item.map((comment) => new Comment(comment))
      : [];
  }
};
