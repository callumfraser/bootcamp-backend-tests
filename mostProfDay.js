module.exports = function mostProfitableDay(salesD){
var priceMap = {};
var highestDay = 0;
var result = null;

  for (var i=0;i<salesD.length;i++){
    var sale=salesD[i];
    if (priceMap[sale.day]===undefined){
      priceMap[sale.day] = 0 + sale.sales;
    }
    priceMap[sale.day] = priceMap[sale.day] + sale.sales
  }
for (key in priceMap){
if (priceMap[key]>highestDay){
  highestDay=priceMap[key]
  result=key
}

  }
return result
}
