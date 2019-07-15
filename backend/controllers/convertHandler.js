/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
	this.getNum = function(input) {
		let val = input.replace(/[a-zA-Z]/g, '');
		
		if(val === '') return 1;
		
		const fractionIndex = val.search(/\//g);

		if(fractionIndex !== -1) {
			let fValue = val.slice(0, fractionIndex);
			let sValue = val.slice(fractionIndex + 1, val.length);

			val = fValue / sValue;
		}

		return Number(Number(val).toFixed(5));
	};
  
	this.getUnit = function(input) {
		if(input === '') return null;
		else return input.match(/[a-zA-Z]/g).join('');
	};

	this.getReturnUnit = function(initUnit) {
		switch(initUnit.toLowerCase()) {
			case 'gal': return 'l';
			case 'l': return 'gal';
			case 'mi': return 'km';
			case 'km': return 'mi';
			case 'lbs': return 'kg';
			case 'kg': return 'lbs';
			default: return null;
		}
	};

	this.spellOutUnit = function(unit) {
		switch(unit.toLowerCase()) {
			case 'gal': return 'gallon';
			case 'l': return 'litre';
			case 'mi': return 'mile';
			case 'km': return 'kilometer';
			case 'lbs': return 'pound';
			case 'kg': return 'kilogram';
			default: return null;
		}
	};

	this.convert = function(initNum, initUnit) {
		const galToL = 3.78541;
		const miToKm = 1.60934;
		const lbsToKg = 0.453592;

		switch(initUnit.toLowerCase()) {
			case 'gal': return Number((initNum * galToL).toFixed(5));
			case 'l': return Number((initNum / galToL).toFixed(5));
			case 'mi': return Number((initNum * miToKm).toFixed(5));
			case 'km': return Number((initNum / miToKm).toFixed(5));
			case 'lbs': return Number((initNum * lbsToKg).toFixed(5));
			case 'kg': return Number((initNum / lbsToKg).toFixed(5));
			default: return null;
		}
	};

	this.getString = function(initNum, initUnit, returnNum, returnUnit) {
		let trnsfInitUnit = this.spellOutUnit(initUnit);
		let trnsfReturnedUnit = this.spellOutUnit(returnUnit);

		if(initNum !== 1) trnsfInitUnit += 's';
		if(returnNum !== 1) trnsfReturnedUnit += 's';

		return `${initNum} ${trnsfInitUnit} converts to ${returnNum} ${trnsfReturnedUnit}`;
	};
}

module.exports = ConvertHandler;