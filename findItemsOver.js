module.exports = var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];

function findItemsOver(shoppingL, threshold){
  var overAmount = [];

  for (var i=0;i<shoppingL.length;i++){
    var item=shoppingL[i];
    if (item.qty > threshold){
      overAmount.push(item)}
  }
  return overAmount
}
