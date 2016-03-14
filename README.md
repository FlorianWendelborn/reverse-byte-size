# reverse-byte-size

Opposite of [byte-size](https://github.com/75lb/byte-size). Takes a human-readable string and gives back the amount of bytes.

## Example

````javascript
var byteSize = require('byte-size');
var rbs = require('./source');

console.log(rbs(byteSize(1580)));
// { size: 1600, options: { units: 'metric', precision: 1 } }

console.log(rbs(byteSize(1580, {
	units: 'iec',
	precision: 3
})));
// { size: 1580, options: { units: 'iec', precision: 3 } }

console.log(rbs(byteSize(1580, {
	units: 'iec',
	precision: 0
})));
// { size: 2048, options: { units: 'iec', precision: 0 } }

console.log(rbs(byteSize(1234325, {
	units: 'iec'
})));
// { size: 1258291, options: { units: 'iec', precision: 1 } }

console.log(rbs(byteSize(45745677650, {
	precision: 3
})));
// { size: 45746000000,
//   options: { units: 'metric', precision: 3 } }

console.log(rbs(byteSize(34654398674396374896734, {
	units: 'iec',
	precision: 8
})));
// { size: 3.4654398669084328e+22,
//   options: { units: 'iec', precision: 8 } }
````
