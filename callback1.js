
var namelist = [];

function findWaldo(arr, found) {

  arr.forEach(function(element, index){

    if(element === "Waldo"){
      namelist = index;
      found()
    }
  });


}

function actionWhenFound() {
  var index = namelist;
  console.log("Found him at Index" + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
