var fs = require('fs');

console.log(process.argv[2]);

var formatFilename = function (s){
	//trim s, remove space begin&end
	s = s.trim();

	//turn into -
	s = s.replace(/(\s|_|\+)+/g, '-');

	//only one - form multiple ---
	s = s.replace(/-+/g, '-');

	//convert to lower
	s = s.toLowerCase();

	return s;
}

// clipboardHandler.paste(function(err, dirname){
// 	console.log(dirname);
// 	fs.readdir(dirname, function(err, items){
// 		var p = /^~\$|^\.|^\../;
// 		items.forEach(function(item){
// 			if(!p.test(item)){
// 				fs.rename(item, formatFilename(item), function(err){
// 					if(err) throw err;
// 					console.log('%s => \033[01;32m%s\033[0m', item, formatFilename(item));
// 				});
// 			}
// 		});
// 	});
// });
var dirname = process.argv[2];
fs.readdir(dirname, function(err, items){
	var p = /^~\$|^\.|^\../;
	items.forEach(function(item){
		var newName = formatFilename(item);
		console.log(item == newName);
		if(!p.test(item) && item != newName){
			fs.rename(dirname + "/" + item, dirname + "/" + newName, function(err){
				if(err){
					console.log('\033[01;31m[E]\033[0mError at %s', item);
					return;
				}
				console.log('%s => \033[01;32m%s\033[0m', item, newName);
			});
		}
	});
});