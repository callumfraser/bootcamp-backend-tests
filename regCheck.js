module.exports = function regCheck(licPlate, location){
  var check = licPlate.endsWith(location)
  return check
};
