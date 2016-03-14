const units = ['b', 'b', 'kb', 'kib', 'mb', 'mib', 'gb', 'gib', 'tb', 'tib', 'pb', 'pib', 'eb', 'eib', 'zb', 'zib', 'yb', 'yib'];

function rbs (input) {
	// split input into number and unit
	let data = input.split(' ');

	// get decimal digits
	let digits = data[0].split('.')[1] || '';

	// match unit
	let index = units.indexOf(data[1].toLowerCase());

	// calculate unit system
	let system = index % 2 ? 'iec' : 'metric';

	// calculate exponent
	let exponent = Math.floor(index/2);

	// calculate size
	let size = parseFloat(data[0], 10) * Math.pow(
		system === 'iec' ? 1024 : 1000,
		exponent
	);

	return {
		size: Math.floor(size),
		options: {
			units: system,
			precision: digits.length
		}
	};
};

module.exports = rbs;
