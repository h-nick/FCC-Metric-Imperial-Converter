/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
	this.getNum = function(input) {
		if(input === '') return 1;

		let val = input.replace(/[a-zA-Z]/g, '');
		const fractionIndex = val.search(/\//g);

		if(fractionIndex !== -1) {
			let fValue = val.slice(0, fractionIndex);
			let sValue = val.slice(fractionIndex + 1, val.length);

			val = fValue / sValue;
		}

		return Number(Number(val).toFixed(5));
	};
  
	this.getUnit = function(input) {
		return input.match(/[a-zA-Z]/g).join('');
	};

	this.getReturnUnit = function(initUnit) {
		var result;

		return result;
	};

	this.spellOutUnit = function(unit) {
		var result;

		return result;
	};

	this.convert = function(initNum, initUnit) {
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;
		var result;

		return result;
	};

	this.getString = function(initNum, initUnit, returnNum, returnUnit) {
		var result;

		return result;
	};
  
}

module.exports = ConvertHandler;
