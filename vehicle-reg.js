module.exports = function isFromBellville(regnumber){

  var fromBellville = regnumber.startsWith('CY');
  return fromBellville;
}
