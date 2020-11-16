module.exports = ({ rss }) => {
  const data = rss.channel;
  console.log({ rss });
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
  const term = require("./terms")(data);

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
    term,
  };
};
