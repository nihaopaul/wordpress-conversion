"use strict";

const fs = require("fs");
const WP_Conversion = require("./libs/index");

const XML = fs.readFileSync("wordpress-export.xml", "utf8");

let wordpress = WP_Conversion(XML);
console.log(Object.assign({}, wordpress));
