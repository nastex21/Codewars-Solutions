function capitalize(s,arr){
  var array = s.split("");

      for(var i = 0; i < arr.length; i++){
        if(array[arr[i]] == undefined){
        } else {
            var x = array[arr[i]];
            var y = x.toUpperCase();
            array[arr[i]] = y
        }
    }
    
    array = array.join("");
    return array;
};