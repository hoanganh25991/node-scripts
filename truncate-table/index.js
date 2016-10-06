const TRUNCATE_TEMPLATE = 'SET FOREIGN_KEY_CHECKS = 0;SET AUTOCOMMIT = 0;START TRANSACTION;TRUNCATE TABLE TABLE_NAME;SET FOREIGN_KEY_CHECKS = 1;COMMIT;SET AUTOCOMMIT = 1 ;';
// console.log(TRUNCATE_QUERY.replace('TABLE_NAME', 'sessions'));
let table_names = process.argv.filter((val, index)=>{
	return index > 1;
});
console.log(table_names);

let truncate_query = '';
table_names.forEach((table_name)=>{
	truncate_query += TRUNCATE_TEMPLATE.replace('TABLE_NAME', table_name);
});

var fs = require('fs');
fs.writeFile(__dirname + '/truncate.sql', truncate_query, (err)=>{
	if(err) throw err;
	console.log('write file success');
});