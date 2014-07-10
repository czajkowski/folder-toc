# folder-toc


Creates an HTML table of content with links to files from a selected directory.

## Usage


```javascript
var folderToc = require("folder-toc");
folderToc("docs");
```

This will create a table of content for all files in the docs directory.

## Options

```javascript
folderToc("target_directory", {
	name : 'index.html',
	layout: 'classic',
	filter: '*.*',
	title: 'Files'	
});
```

### name

Type: String 

Defaults: index.html

Name of the file containing the table of content.

### layout

Type: String

Default: classic

Built-in layout.

### filter

Type: String

Default: *.*

Pattern matching files which should be included in the table of content.

### title

Type: String

Default: Files

Table of content file title.

