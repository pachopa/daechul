

function countLetters(sentence) {
  var dict = {};
  for (i = 0; i<sentence.length; i++){
    if (sentence[i] in dict) {

      dict[sentence[i]].push(i);

    } else {
      dict[sentence[i]] = [i];
    }
  }
  return dict;
}


console.log(countLetters("lighthouse in labs"));


// l : 0 ,11
// i : 1 , 8
// g : 2 ,
// h :
// o
// u
// s
// e
