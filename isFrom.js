module.exports = function isFrom (regNum, locationCode){

  const evalProcess = regNum.startsWith(locationCode)
  console.log(evalProcess)
  return evalProcess
}
