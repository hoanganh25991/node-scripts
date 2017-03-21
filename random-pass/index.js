var clipboardHandler = require('copy-paste');
var randomstring = Math.random().toString(36).slice(-8);
clipboardHandler.copy(randomstring);