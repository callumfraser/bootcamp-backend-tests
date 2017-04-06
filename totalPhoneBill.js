module.exports = function totalPhoneBill(costs){
  var spliCosts = costs.split(', ')
  var cost = 0

  for (var i=0; i<spliCosts.length;i++){
    var costList = spliCosts[i];
    if (costList==='call'){
      cost += 2.75}
    if (costList==='sms'){
      cost += 0.65}
  }
    return "R"+cost.toFixed(2);
  }
