var byteSize = require('byte-size');
var rbs = require('./source');

console.log(rbs(byteSize(1580)));
console.log(rbs(byteSize(1580, {
	units: 'iec',
	precision: 3
})));
console.log(rbs(byteSize(1580, {
	units: 'iec',
	precision: 0
})));

console.log(rbs(byteSize(1234325, {
	units: 'iec'
})));
console.log(rbs(byteSize(45745677650, {
	precision: 3
})));
console.log(rbs(byteSize(34654398674396374896734, {
	units: 'iec',
	precision: 8
})));
