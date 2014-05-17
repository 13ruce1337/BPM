var hogan = require('hogan.js'),
    fs = require('fs'),
    template,
    parts,
    css,
    jquery,
    bpm,
    type,
    output;

parts = {};

function getcontents(file,v,cb) {
  fs.readFile(file,'utf-8',function(err,d) {
    if(err) throw err;
    type = v;
    cb(d);
  });
}

function comp(d) {
  if(type === 'template') {
    template = d;
  } else {
    parts[type] = d;
  }
  if(template && parts.style && parts.bpm && parts.jquery && parts.app) {
    var temp = hogan.compile(template);
    output = temp.render(parts);
    fs.writeFile(__dirname + '/../../build/bpm.html',output,function(err) {
      if(err) throw err;
    });
  }
}

getcontents('src/libs/temp.html','template',comp);
getcontents('src/libs/bpm.css','style',comp);
getcontents('src/plugins/jquery/dist/jquery.min.js','jquery',comp);
getcontents('src/res/bpm.js','bpm',comp);
getcontents('src/res/app.js','app',comp);
