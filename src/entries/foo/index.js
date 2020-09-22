const path = require('path');
const fs = require('fs');

// src/pages作为页面入口的根目录
const pageRoot = path.resolve(__dirname,'./src/pages');

// // fs 读取 pages 下的所有文件夹来作为入口，使用 entries 对象记录下来

const entries = fs.readdirSync(pageRoot).reduce((entries,page) => {
    // 文件夹名称作为入口名称，值为对应的路径，可以省略 `index.js`，webpack 默认会寻找目录下的 index.js 文件
  entries[page] = path.resolve(pagesRoot, page);
  return entries;
},{})

module.exports = {
    // 将 entries 对象作为入口配置
    entry: entries,
  };