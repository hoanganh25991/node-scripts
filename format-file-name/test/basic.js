'use strict';
var assert = require('assert');
var format = require('../format-file-name');

describe('basic', function() {
	describe('#format', function(){
		it('should format   "Anh__Le- --hoang  " > "anh-le-hoang"', function() {
			var s = 'Anh__Le- --hoang  ';
			s = format(s);
			assert.equal("anh-le-hoang", s);
		});
	});
});
