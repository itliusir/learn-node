'use strict'

var s = 'Hello';

function greet(name){
	console.log(s+','+name+'!');
}

var i = '20171206';

module.exports = {
	greet: greet,
	i: i
}