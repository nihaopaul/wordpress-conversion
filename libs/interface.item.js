const assert = require("assert").strict;
const Metadata = require("./metadata");
module.exports = class ItemInterface {
  #data;
  constructor(args) {
    this.#data = args;
  }

  get data() {
    // utility function to pass by reference to children
    return this.#data;
  }

  get type() {
    assert(this.data.type._cdata, "Unable to find the document type");
    return this.data.type._cdata;
  }

  get pubDate() {
    // not every item has a published date
    assert(this.data.pubDate, `Unable to find the published date`);
    return this.data.pubDate._text ? this.data.pubDate._text : null;
  }

  get title() {
    // not every item has a title
    assert(this.data.title, "Unable to find the document title");
    return this.data.title._text ? this.data.title._text : false;
  }

  get link() {
    assert(this.data.link._text, "Unable to find document link");
    return this.data.link._text;
  }

  get creator() {
    assert(this.data.creator._cdata, "Unable to find creator");
    return this.data.creator._cdata;
  }

  get guid() {
    assert(this.data.guid, "Unable to find guid details");
    assert(
      this.data.guid._attributes.isPermaLink,
      "Unable to find isPermaLink details"
    );

    const isPermaLink =
      this.data.guid._attributes.isPermaLink === "True" ? true : false;

    assert(this.data.guid._text, "Unable to find guid url");
    const url = decodeURI(this.data.guid._text);

    return {
      isPermaLink,
      url,
    };
  }
  get description() {
    assert(this.data.description, "Unable to find description");
    return this.data.description;
  }

  get category() {
    // can be an Array or an Object :( *normalisation needed* now always returns an Array
    assert(this.data.category, "Unable to find a category field");
    const type = Array.isArray(this.data.category) ? "array" : "object";
    return this[`_category_type_${type}`](this.data.category);
  }

  _category_type_array(categories) {
    return categories.reduce((prev, category) => {
      const item = this._category_type_object(category);
      prev.push(item[0]);
      return prev;
    }, []);
  }
  _category_type_object(item) {
    assert(item._attributes, "Unable to find attributes");
    assert(item._attributes.domain, "Unable to find domain");
    assert(item._attributes.nicename, "Unable to find nicename");
    assert(item._cdata, "Unable to find data");
    const { domain, nicename } = item._attributes;
    const { _cdata: name } = item;
    return [{ domain, nicename, name }];
  }

  get id() {
    assert(this.data.id._text, "Unable to find ID");
    return Number(this.data.id._text);
  }

  get postDate() {
    // format the date to a GMT timezone so we can use it and have it localized if we need to
    return this._postDateGMT;
  }
  get _postDateGMT() {
    assert(this.data.postDateGMT._cdata, "Cannot find postDateGMT");
    return new Date(`${this.data.postDateGMT._cdata} GMT`);
  }
  get commentStatus() {
    assert(this.data.commentStatus._cdata, "Cannot find commentStatus");
    return this.data.commentStatus._cdata;
  }
  get pingStatus() {
    assert(this.data.pingStatus._cdata, "Cannot find pingStatus");
    return this.data.pingStatus._cdata;
  }

  get status() {
    assert(this.data.status._cdata, "Cannot find status");
    return this.data.status._cdata;
  }
  get parent() {
    assert(this.data.parent._text, "Cannot find parent");
    return Number(this.data.parent._text);
  }
  get order() {
    assert(this.data.order._text, "Cannot find order");
    return Number(this.data.order._text);
  }

  get isSticky() {
    assert(this.data.isSticky._text, "Cannot find isSticky");
    return this.data.isSticky._text === "1" ? true : false;
  }

  get metadata() {
    assert(this.data.metadata, "Cannot find metadata");
    return new Metadata(this.data.metadata);
  }
  get comments() {}
};
