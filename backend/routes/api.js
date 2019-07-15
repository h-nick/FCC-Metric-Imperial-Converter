/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
	var convertHandler = new ConvertHandler();
	app.route('/api/convert').get(function (req, res){
		let okNumber = true;
		let okUnit = true;
		
		var input = req.query.input;
		
		var initNum = convertHandler.getNum(input);
		if(isNaN(initNum)) okNumber = false;

		var initUnit = convertHandler.getUnit(input);
		switch(initUnit) {
			case 'gal': case 'GAL':
			case'l': case 'L':
			case 'mi': case 'MI':
			case 'km': case 'KM':
			case 'lbs': case 'LBS':
			case 'kg': case 'KG': break;
			default: okUnit = false;
		}

		if(!okNumber && !okUnit) return res.status(400).json('invalid number and unit');
		else if(!okNumber) return res.status(400).json('invalid number');
		else if(!okUnit) return res.status(400).json('invalid unit');

		var returnNum = convertHandler.convert(initNum, initUnit);
		var returnUnit = convertHandler.getReturnUnit(initUnit);
		var string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

		return res.json({
			initNum,
			initUnit,
			returnNum,
			returnUnit,
			string
		});
    });
};
