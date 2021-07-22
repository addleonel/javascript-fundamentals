// New Regular Expression Features

// more info: https://2ality.com/2017/05/regexp-named-capture-groups.html

const REGEXDATA = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = REGEXDATA.exec("2021-06-21");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);  // 2021 06 21