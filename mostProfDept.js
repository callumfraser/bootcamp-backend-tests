module.exports = function mostProfitableDepartment(salesD){
var priceMap = {};
var highestDept = 0;
var result = null;

  for (var i=0;i<salesD.length;i++){
    var sale=salesD[i];
    if (priceMap[sale.department]===undefined){
      priceMap[sale.department] = 0 + sale.sales;
    }
    priceMap[sale.department] = priceMap[sale.department] + sale.sales
  }
for (key in priceMap){
if (priceMap[key]>highestDept){
  highestDept=priceMap[key]
  result=key
}

  }
return result
};
