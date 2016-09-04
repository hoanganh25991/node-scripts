var clipboardHandler = require('copy-paste');

var format = require('./format-file-name');

clipboardHandler.paste(function(err, filename){
	clipboardHandler.copy(format(filename));
});