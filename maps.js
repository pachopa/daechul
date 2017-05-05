// Goal: [6, 7, 2, 5, 3]

function map(list, cb) {
  var listOfLengths = [];
  for(let i=0; i<list.length; i++){
      var lengthOfThisWord = cb(list[i]);
      listOfLengths.push(lengthOfThisWord);

  }
  return listOfLengths;
}




var words = ["ground", "control", "to", "major", "tom"];

var lengths = map(words, function(word) {
  return word.length;
});

console.log(lengths);
