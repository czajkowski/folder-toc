var path = require('path');
var folderToc = require("..");

folderToc("example", {
  name: 'index.html',
  templateDir: path.join(__dirname, 'custom_layout'),
  filter: '*.*',
  title: 'Files'
});