function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

    var args = Array.prototype.slice.call(arguments);
    var arr = [];
    var i = 0;
    
    while (i < args.length){
    var num = args[i] * args[i];
    arr.push(num);
    i++;
    }
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var newSum = arr.reduce(reducer);
    var newNum = Math.sqrt(newSum);
    var answer = Math.floor(newNum / 2);
    return answer;
}