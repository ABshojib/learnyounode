var fs = require('fs');
var File = process.argv[2];
 
fs.readFile(File, function (err, contents) {
    if (err)
        return console.log(err);

    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
});