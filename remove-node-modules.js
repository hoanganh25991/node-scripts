const fs = require('fs');
const path = require('path');
const cpr = require('child_process');

const dirList = fs.readdirSync(process.cwd())

// console.log("[dirList]", dirList);

dirList.map(dir => {
  const nodeModules = path.join(dir, 'node_modules');
  console.log(nodeModules);
  cpr.exec(`rm -rf ${nodeModules}`);
})
