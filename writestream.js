'use strict';

var fs = require('fs');

var ws = fs.createWriteStream('output1.txt','utf-8');
ws.write('I am itliusir\n');
ws.write('heiheihei\n');
ws.write('END.');
ws.end();