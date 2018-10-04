function array_diff(a, b) {
    if (a.length == 0 || b.length == 0){
        return a;
    }

    function check () {
    for (var i = 0; i < b.length; i++){
        for (var j = 0; j < a.length; j++){
            if (b[i] === a[j]){
                a.splice(j, 1);
                check();
            } 
        }
      }
    }
    check();
    return a;   
}