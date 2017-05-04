
function countLetters(strings) {
  var output = {};
  for(var i = 0; i< strings.length; i = i + 1){
    var SpliteString = strings.split("");
    var theSpliteString = theSpliteString.length;
    if(output[theSpliteString]) {
      output[theSpliteString] += 1;
    } else {
      output[theSpliteString] = 1;
    }


  }
  return output;
}


console.log(countLetters([]),


//At first let's show the output and the name


function countLengths(strings) {
  var output = {};
  for (var i = 0; i < strings.length; i = i + 1) {
    // This is usually where we modify the output
    var theString = strings[i];
    var theStringsLength = theString.length;
    if (output[theStringsLength]) {
      // We've previously seen a string of this length, so
      // increment the value by 1
      // output[theStringsLength] = output[theStringsLength] + 1;
      output[theStringsLength] += 1;
      // output[theStringsLength]++;
      // ++output[theStringsLength];
    } else {
      // This is the first time we've seen a string of this length
      // so we need to initialize it to 1
      output[theStringsLength] = 1;
    }
  }
  return output;
}

console.log(countLengths([]), 'should be {}');
console.log(countLengths(['a']), 'should be {1: 1}');
console.log(countLengths(['', '', 'asdf', 'al;dkfja;lsdkfj']), 'should be {stuff}');

var instructors = ['Don', 'Joel', 'David', 'Karl', 'Khurram'];
console.log(countLengths(instructors));