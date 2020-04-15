
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.
//  We are in trouble if they are both smiling or if neither of them is smiling. 
//  Return true if we are in trouble.

function monkeys(aSmiling, bSmiling){
    if( aSmiling && bSmiling || !aSmiling && !bSmiling ){
        return true
    } 
    return false
}

console.log(monkeys(true, true));
console.log(monkeys(false, false));
console.log(monkeys(false, true));
console.log(monkeys(true, false));