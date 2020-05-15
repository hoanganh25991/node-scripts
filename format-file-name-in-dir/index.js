const fs = require("fs");

const directory = process.argv[2];
console.log("[dirname]", directory);

const formatFilename = function (s) {
  //trim s, remove space begin&end
  s = s.trim();

  //turn into -
  s = s.replace(/(\s|_|\+)+/g, "-");

  //only one - form multiple ---
  s = s.replace(/-+/g, "-");

  //convert to lower
  s = s.toLowerCase();

  //remove microsoft-teams
  s = s.replace("-microsoft-teams", "");

  return s;
};

fs.readdir(directory, function (err, items) {
  const p = /^~\$|^\.|^\../;

  items.forEach(function (item) {
    const newName = formatFilename(item);
    console.log(item == newName);

    if (!p.test(item) && item != newName) {
      const oldPath = directory + "/" + item;
      const newPath = directory + "/" + newName;

      fs.rename(oldPath, newPath, (err) => {
        console.log("%s => \033[01;32m%s\033[0m", item, newName);
        err && console.log(err);
      });
    }
  });
});
