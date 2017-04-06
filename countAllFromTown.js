module.exports = function countAllFromTown(plateList, location){
  var sepList = plateList.split(",");
var pPlates = [];
for (var i=0; i<sepList.length;i++){
  var origPlates = sepList[i].trim();
  if (origPlates.startsWith(location)){
    pPlates.push(origPlates);
  }
}
  return pPlates.length;
}
// var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
// console.log(fromStellies);
