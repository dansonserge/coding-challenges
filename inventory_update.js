function updateInventory(arr1, arr2) {
    //iterate through each item in the second array
      for (var i = 0; i < arr2.length; i++) {
        var foundMatch = false;
    //Does the current item match any existing items? If so, update their quantity    
                for (var n = 0; n < arr1.length; n ++) {
                    if (arr1[n][1].indexOf(arr2[i][1]) !== -1) {
                    arr1[n][0] += arr2[i][0];
                //Make foundMatch true so it doesnt add the item later, outside of this iteration
                        foundMatch = true;
                        
                        } 
                }
     //Did iterating through the array turn up a match?
                if (foundMatch === false) {
                    //if not, create new item
                    arr1.push(arr2[i]);
                }

        }
    //final step, sort everything that is in the array
    arr1.sort(function(a, b) {
        if (a[1] < b[1]) {
            return -1; }
        return 1;
    });
    return arr1;
    }
    
    // Example inventory lists
    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];
    
    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];