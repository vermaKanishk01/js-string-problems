function reverseEachWord(sentence) {
  let result = "";
  let word = "";

  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i];

    // If space or end of string, reverse the word
    if (char === " " || i === sentence.length) {
      // reverse the collected word
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }

      // add space if it's not the end
      if (char === " ") {
        result += " ";
      }

      word = ""; // reset word
    } else {
      word += char; // build word
    }
  }

  return result;
}
console.log(reverseEachWord("Hello World from JS"));