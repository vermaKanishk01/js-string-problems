
// function for Palindrome string
function isPalindromeString(str){
    let reverse = "";
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    if(str === reverse){
        console.log("Palindrome String");
    }else{
        console.log("Not a palindrome String");
    }
}
isPalindromeString("level");


// function for Palindrome Number
function isPalindromeNumber(num){
    let str = String(num); 
    let reverse = "";
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    if(str === reverse){
        console.log("Palindrome Number");
    }else{
        console.log("Not a palindrome Number");
    }
}
isPalindromeNumber(121);