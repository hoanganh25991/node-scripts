// console.log(process.argv);

(process.argv[2] && process.argv[3]) ? function(){
	folder = process.argv[2];
	path = process.argv[3];
}() : function(){
	console.log('please supply "folder", "path/to/file"');
	throw "stop here";
}();

let parser = require('laravel-blade-parser');

let html = parser({folder, path});

let fileName = path.split('\\').pop();
fileName = folder + '\\' + fileName.replace('blade.php', 'html');
let fs = require('fs');
	
fs.writeFile(fileName, html, (err)=>{
	if(err) throw err;
	console.log(fileName + ': \033[01;32mwrite success\033[0m');
});