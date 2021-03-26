'use strict';

const BigNumber = require('bignumber.js');

const hykerUnits = function () {};
hykerUnits.unitMap = {
  'wei': '1',
  'kwei': '1000',
  'ada': '1000',
  'femtohyker': '1000',
  'mwei': '1000000',
  'babbage': '1000000',
  'picohyker': '1000000',
  'gwei': '1000000000',
  'shannon': '1000000000',
  'nanohyker': '1000000000',
  'nano': '1000000000',
  'szabo': '1000000000000',
  'microhyker': '1000000000000',
  'micro': '1000000000000',
  'finney': '1000000000000000',
  'millihyker': '1000000000000000',
  'milli': '1000000000000000',
  'hyker': '1000000000000000000',
  'khyker': '1000000000000000000000',
  'grand': '1000000000000000000000',
  'einstein': '1000000000000000000000',
  'mhyker': '1000000000000000000000000',
  'ghyker': '1000000000000000000000000000',
  'thyker': '1000000000000000000000000000000',
};
hykerUnits.getValueOfUnit = function (unit) {
  unit = unit ? unit.toLowerCase() : 'hyker';
  const unitValue = this.unitMap[unit];
  if (unitValue === undefined) {
    throw new Error(globalFuncs.errorMsgs[4] + JSON.stringify(this.unitMap, null, 2));
  }
  return new BigNumber(unitValue, 10);
};

hykerUnits.toHyker = function (number, unit) {
  const returnValue = new BigNumber(this.toWei(number, unit)).div(this.getValueOfUnit('hyker'));
  return returnValue.toString(10);
};

hykerUnits.toGwei = function (number, unit) {
  const returnValue = new BigNumber(this.toWei(number, unit)).div(this.getValueOfUnit('gwei'));
  return returnValue.toString(10);
};

hykerUnits.toWei = function (number, unit) {
  const returnValue = new BigNumber(String(number)).times(this.getValueOfUnit(unit));
  return returnValue.toString(10);
};

module.exports = hykerUnits;
