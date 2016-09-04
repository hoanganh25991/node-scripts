var converter = new(require('showdown')).Converter();
var fs = require('fs');

var markdownFilename = process.argv[2] ? process.argv[1] : 'readme.md';

console.log(`Parse on: ${markdownFilename}`);

fs.readFile(markdownFilename, 'utf8', function(err, contents) {
	var html = converter.makeHtml(contents);
	fs.writeFile('index.html', html, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log('\033[01;32mFile: created!\033[0m');
	}); 
});

