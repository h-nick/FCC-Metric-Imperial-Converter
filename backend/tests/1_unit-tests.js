/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
	suite('Function convertHandler.getNum(input)', function() {
    
    	test('Whole number input', function(done) {
			assert.equal(convertHandler.getNum('32lbs'), 32);
			assert.equal(convertHandler.getNum('14GAL'), 14);
			assert.equal(convertHandler.getNum('25L'), 25);
    		done();
    	});
    
		test('Decimal Input', function(done) {
			assert.equal(convertHandler.getNum('40.5KG'), 40.5);
			assert.equal(convertHandler.getNum('25.5KG'), 25.5);
			assert.equal(convertHandler.getNum('0.7KG'), 0.7);
			done();
		});
		
		test('Fractional Input', function(done) {
			assert.equal(convertHandler.getNum('10/5lbs'), 2);
			assert.equal(convertHandler.getNum('5/10lbs'), 0.5);
			assert.equal(convertHandler.getNum('4/4lbs'), 1);
			done();
		});
		
		test('Fractional Input w/ Decimal', function(done) {
			assert.equal(convertHandler.getNum('6.75/4.25lbs'), 1.58824);
			assert.equal(convertHandler.getNum('7.5/2lbs'), 3.75);
			assert.equal(convertHandler.getNum('12343.92819/1.72839lbs'), 7141.86508);
			done();
		});
		
		test('Invalid Input (double fraction)', function(done) {
			assert.isNaN(convertHandler.getNum('7/5/14/3lbs'));
			assert.isNaN(convertHandler.getNum('3/9/4/5lbs'));
			assert.isNaN(convertHandler.getNum('5/7/0/7lbs'));
			done();
		});
		
		test('No Numerical Input', function(done) {
			assert.equal(convertHandler.getNum(''), 1);
			done();
		});
	});

	suite('Function convertHandler.getUnit(input)', function() {
		test('For Each Valid Unit Inputs', function(done) {
			var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
			input.forEach(function(ele) {
				assert.equal(convertHandler.getUnit('12345' + ele), ele);
				assert.equal(convertHandler.getUnit('1.2/1.5' + ele), ele);
				assert.equal(convertHandler.getUnit('0.98299' + ele), ele);
			});
			done();
		});
		
		test('Unknown Unit Input', function(done) {
			assert.isNull(convertHandler.getUnit(''));
			done();
		});  
	});
  
	suite('Function convertHandler.getReturnUnit(initUnit)', function() {
		test('For Each Valid Unit Inputs', function(done) {
			var input = ['gal','l','mi','km','lbs','kg'];
			var expect = ['l','gal','km','mi','kg','lbs'];
		
			input.forEach(function(ele, i) {
				assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
			});
		
			done();
		});
	});
  
	suite('Function convertHandler.spellOutUnit(unit)', function() {
		test('For Each Valid Unit Inputs', function(done) {
			assert.equal(convertHandler.spellOutUnit('gal'), 'gallon')
			assert.equal(convertHandler.spellOutUnit('l'), 'litre')
			assert.equal(convertHandler.spellOutUnit('mi'), 'mile')
			assert.equal(convertHandler.spellOutUnit('km'), 'kilometer')
			assert.equal(convertHandler.spellOutUnit('lbs'), 'pound')
			assert.equal(convertHandler.spellOutUnit('kg'), 'kilogram')
			done();
		});
	});
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      //done();
    });
    
    test('Mi to Km', function(done) {
      
      //done();
    });
    
    test('Km to Mi', function(done) {
      
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      
      //done();
    });
    
  });

});