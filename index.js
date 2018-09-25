var path = require('path');
var glob = require('glob');
var _ = require('underscore');
var fs = require('fs-extra');

var defaults = {
  name : 'index.html',
  templateDir: 'resources/classic',
  templateFile: 'index.jst',
  filter: '*.*',
  title: 'Files'
};


module.exports = function (source, options) {

  var config, indexFileName, filesRaw, files, i, l, fileRelativePath, fileName;

  config = _.extend({}, defaults, _.pick(options || {}, _.keys(defaults)));

  config.templateDir = config.templateDir;
  config.templateFile = path.join(config.templateDir, config.templateFile);
  config.template = _.template(fs.readFileSync(config.templateFile).toString());

  config.globPattern = path.join(source, '/**/', config.filter);

  indexFileName = path.join(source, config.name);
  filesRaw = glob.sync(config.globPattern);
  files = [];

  for (i = 0, l = filesRaw.length; i < l; i++) {

    fileRelativePath = path.relative(source, filesRaw[i]);

    // Exclude index file if performed multiple times
    if (fileRelativePath !== config.name) {
      files.push({
        name : path.basename(filesRaw[i]),
        path : fileRelativePath
      });
    }
  }

  // Copy assets
  if (fs.existsSync(config.templateDir)) {
    fs.copySync(config.templateDir, path.join(source, config.name + '_assets'));
  }

  // Create index file
  fs.writeFileSync(indexFileName, config.template({
    files: files,
    name: config.name,
    title: config.title
  }));
};
