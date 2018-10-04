function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  var elArrLen = [];
  var num = 0;
  var answerArr = [];
  for (var i = 0; i < array.length; i++){
    num = array[i].length;
    elArrLen.push(num);
  }
  elArrLen.sort(function(a, b){return a - b});
  
  for (var i = 0; i < elArrLen.length; i++){
    array.find(function(element) {
      if((element.length == elArrLen[i]) == true){
          answerArr.push(element);
  };
});
  }
  return answerArr;
};