function rowSumOddNumbers(n) {
	// TODO
    var num1 = n * (n - 1) + 1;
    var arr = [num1];

    for (var i = 1; i < n; i++) {
        arr.push((arr[i - 1] + 2))
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer);
}