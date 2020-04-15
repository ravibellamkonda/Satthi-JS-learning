/*The parameter weekday is true if it is a weekday, and the parameter vacation is 
 true if we are on vacation. We sleep in 
 if it is not a weekday or we're on vacation. Return true if we sleep in. */

function sleepIn (weekday, vacation) {
 if(!weekday || vacation){
     return true
 }
 return false
}
document.write(sleepIn(true, false))
document.write(sleepIn(false, false))
document.write(sleepIn(true, true))
document.write(sleepIn(false, true))