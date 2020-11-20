"use strict";
const XML2JSON = require("./utils/xml-to-json");
const assert = require("assert").strict;

module.exports = (XML) => {
  assert(XML, "No XML found.");
  const { rss } = XML2JSON(XML);
  assert(rss.channel, "No valid data found");
  const data = rss.channel;

  const title = require("./title")(data);
  const link = require("./link")(data);
  const description = require("./description")(data);
  const pubDate = require("./pubdate")(data);
  const language = require("./language")(data);
  const version = require("./version")(data);
  const base_site_url = require("./base_site_url")(data);
  const base_blog_url = require("./base_blog_url")(data);
  const authors = require("./authors")(data);
  const categories = require("./categories")(data);
  const tags = require("./tags")(data);
  const terms = require("./terms")(data);
  const generator = require("./generator")(data);
  const icon = require("./icon")(data);
  const _items = require("./items")(data);

  // cached based on items
  const attachments = () =>
    _items().filter((item) => item.type === "attachment");

  const posts = () => {
    return _items().filter((item) => item.type === "post");
  };

  const nav_menu_items = () =>
    _items().filter((item) => item.type === "nav_menu_item");

  const pages = () => _items().filter((item) => item.type === "page");

  return {
    title,
    link,
    description,
    pubDate,
    language,
    version,
    base_site_url,
    base_blog_url,
    authors,
    categories,
    tags,
    terms,
    generator,
    icon,
    _items,
    // utilities cached from items
    attachments,
    posts,
    nav_menu_items,
    pages,
  };
};
