const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello World!');

hash.update('Hello nodejs');

console.log(hash.digest('hex'));

const hmac = crypto.createHmac('sha256','secret-key');

hmac.update('Hello World!');

hmac.update('Hello nodejs');

console.log(hmac.digest('hex'));