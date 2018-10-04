// complete the function
function solution(string) {
    var wordCase = string.search(/[a-z][A-Z]/gm);
    var answer = string.substr(0, wordCase + 1) + " " + string.substr(wordCase + 1);
    var wordAnswer;

    var capFunc = function(){
        if(wordCase > -1){
            wordAnswer = answer;
            wordCase = wordAnswer.search(/[a-z][A-Z]/gm);
            answer = wordAnswer.substr(0, wordCase + 1) + " " + wordAnswer.substr(wordCase + 1);
            capFunc();
        } else {
            return wordAnswer;
        }
    }
capFunc();
return wordAnswer;
}