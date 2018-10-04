function digits(num){
    var arr = num.toString().split("");
    var ansArr = [];
    
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = i + 1; j < arr.length; j++){
            var ans = +arr[i] + +arr[j];
            ansArr.push(ans);
        }
    }

    return ansArr;
}