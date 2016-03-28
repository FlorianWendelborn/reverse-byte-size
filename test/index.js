var expect = require('expect.js');
var rbs = require('../build');

describe('should return the correct size', function () {
	it('for metric units', function () {
		expect(rbs('1.0 kB').size).to.equal(1000);
	});
	it('for iec units', function () {
		expect(rbs('1024 B').size).to.equal(1024);
	});
});
