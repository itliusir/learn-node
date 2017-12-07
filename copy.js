'use strict';

var fs = require('fs');
var rs = fs.createReadStream('sample.txt','utf-8');
var ws = fs.createWriteStream('copied.txt','utf-8');

rs.pipe(ws);