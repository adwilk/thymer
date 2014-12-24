var assert = require("assert"),
	thymer = require('../thymer');

describe('thymer', function(){
	it('should be an object', function(){
    	assert.equal(typeof thymer, 'object');
    });

	describe('.wait(n)', function(){
		it('should be a function', function(){
			assert.equal(typeof thymer.wait, 'function');
		});

		it('should return self', function(){
			thymer.test = 123;
			assert.equal(thymer.wait().test, 123);
		});

		it('should set timeout', function(){
			assert.equal(thymer.wait(500).timeout, 500);
		});
	});

	describe('.every(n)', function(){
		it('should be a function', function(){
			assert.equal(typeof thymer.every, 'function');
		});

		it('should return self', function(){
			thymer.test = 456;
			assert.equal(thymer.every().test, 456);
		});

		it('should set interval', function(){
			assert.equal(thymer.every(500).interval, 500);
		});
	});
});