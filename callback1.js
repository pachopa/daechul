

function findWaldo(arr, found) {

  arr.forEach(function(element, index){

    if(element === "Waldo"){

      found(element, index)
    }
  });


}

function actionWhenFound(element, index) {

  console.log("Found " + element +  " at Index" + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
