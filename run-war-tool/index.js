var exec = require('child_process').exec;
var g = exec('D:\\program\\garena-total\\GarenaTotal.exe');
var g1 = exec('D:\\storage\\warcraft-iii\\AHT.v2.9.exe');
var g2 = exec('D:\\storage\\warcraft-iii\\DotaToolKit.exe');
process.on('exit', ()=>{
	g.kill();
	g1.kill();
	g2.kill();
	console.log('open success');
});