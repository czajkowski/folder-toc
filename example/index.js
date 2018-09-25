var path = require('path');
var folderToc = require("folder-toc");

folderToc(".", {
  name: 'index.html',
  templateDir: path.join(__dirname, 'custom_layout'),
  filter: '*.*',
  title: 'Files'
});