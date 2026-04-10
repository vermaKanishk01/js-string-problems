let sentence = "hello world from javascript";
let result = "";
let capitalizeNext = true;

for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];

  if (capitalizeNext && char !== " ") {
    // convert lowercase to uppercase manually
    let code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      char = String.fromCharCode(code - 32);
    }

    capitalizeNext = false;
  }

  result += char;

  if (char === " ") {
    capitalizeNext = true;
  }
}

console.log(result);
