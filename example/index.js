var folderToc = require("..");

folderToc("example", {
  name: 'index.html',
  templateDir: './example/custom_layout',
  filter: '*.*',
  title: 'Files'
});