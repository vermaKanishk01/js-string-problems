// count the total number of vowels in a string.

function countVowels_2(str){
    let vowels = "aeiou";
    let count = 0;
    
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(str[i].toLowerCase() === vowels[j]){
                count++;
            }
        }
    }
    console.log(count)
}
countVowels_2("AEIOUaeiou");