function diffArray (array1, array2) {
    var x = [];
    var difference = [];
    for (var i = 0; i < array1.length; i++) {
      x[array1[i]] = true;    
    }
    for (var i = 0; i <array2.length; i++) {
      if (x[array2[i]]) {
        delete x[array2[i]];
      } else {
        x[array2[i]] = true;
      }
    }
    for (var k in x){
      difference.push(k);    
    }
    return difference;
  }
  console.log(diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]));
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));