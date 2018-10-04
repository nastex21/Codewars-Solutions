function printerError(s) {
    // your code
    var len = s.length;
    var counter = 0;
    
    for (var i = 0; i < s.length; i++){
        if(s.charCodeAt(i) > 109){
            counter++;
        }
    }
    return counter + "/" + len 
    
}