

function countLetters(sentence) {
  var dict = {};
  for (i = 0; i<sentence.length; i++){
    if (sentence[i] in dict) {
      dict[sentence[i]] += 1;

    } else {
      dict[sentence[i]] = 1;
    }
  }
  return dict;
}


console.log(countLetters("helloasdfasdfasdf"));


