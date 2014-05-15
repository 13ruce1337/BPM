var hogan = require('hogan.js'),
    fs = require('fs'),
    template,
    parts,
    css,
    jquery,
    bpm;

function getcontents(file) {
  fs.readFile(file,'utf-8',function(err,data) {
    if(err) throw err;
    return data;
  });
}

template = getcontents('/../libs/temp.html');
console.log(template);

parts = {
  "css":css,
  "jquery":jquery,
  "bpm":bpm
};
