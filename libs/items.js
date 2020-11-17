const assert = require("assert").strict;
const Item = require("./item");

let ItemCache;
module.exports = ({ item: items }) => () => {
  assert(items, "No Items");
  if (ItemCache) return ItemCache;
  ItemCache = items.map((item) => new Item(item));
  return ItemCache;
};
