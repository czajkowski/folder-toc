# folder-toc


Creates an HTML table of content with links to files from a selected directory.

## Example

```
npm run example
```

An table of content will be created within the /example directory.
A custom template will be used.

## Usage


```javascript
var folderToc = require("folder-toc");
folderToc("docs");
```

This will create a table of content for all files in the docs directory.

## Options

```javascript
folderToc("target_directory", {
    name: 'index.html',
    templateDir: './resources/classic',
    templateFile: 'index.jst',
    filter: '*.*',
    title: 'Files'
});
```

### name

Type: String

Defaults: 'index.html'

Name of the output file containing the table of content.

### templateDir

Type: String

Location of the template directory.
Template directory should contain a template file and all required assets.

Contents of the template directory will be copied to the location where the table of content is created and placed in the '[name]\_assets' directory. Set paths to used assets in the template file accordingly.

### templateFile

Type: String

Name of the template file within the template directory.

### filter

Type: String

Default: *.*

Pattern matching files which should be included in the table of content.

### title

Type: String

Default: Files

Table of content file title.

## Custom templates

If you would like to create a custom template for the table of content copy and customize the contents of the '/reqources/custom' directory.

