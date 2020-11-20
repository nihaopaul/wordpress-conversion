const assert = require("assert");

module.exports = class Metadata {
  constructor(item) {
    assert(item, "No Object found");
    const type = Array.isArray(item) ? "array" : "object";

    return [this[`_type_${type}`](item)].flat().filter((item) => item);
  }

  _type_array(array) {
    return array.map(this._type_object);
  }

  _type_object(object) {
    const { "wp:meta_key": key, "wp:meta_value": value } = object;
    assert(key._cdata, "No Key found");
    if (!value._cdata) return;
    return { key: key._cdata, value: value._cdata };
  }
};
