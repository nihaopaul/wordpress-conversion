# wordpress-conversion

Still need to create documentation for this, quick sample:

```javascript
"use strict";

const fs = require("fs");
const WP_Conversion = require("./libs/index");

const XML = fs.readFileSync("wordpress-export.xml", "utf8");

let wordpress = WP_Conversion(XML);
console.log(Object.assign({}, wordpress));
```

## Configurations from wordpress

title: String
link: String
description: String
pubDate: String
language: String
version: String
base_site_url: String
base_blog_url: String
generator: String
icon: Object

## Arrays

### authors: Authors Array[]

### attachments: Attachments Array[]

### categories: Categories Array[]

### nav_menu_items: MenuItems Array[]

### pages: Pages Array[]

### posts: Posts Array[]

### tags: Tags Array[]

### terms: Terms Array[]
