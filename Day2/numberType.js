function checkNumber(num){
    let number=num;
    if(number>0){
        return "Positive";
    }else if(number<0){
        return "Negative";
    }else{
        return "Zero";
    }
}
console.log(checkNumber(40));
console.log(checkNumber(-1));
console.log(checkNumber(0));
