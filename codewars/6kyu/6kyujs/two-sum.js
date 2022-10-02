function twoSum(numbers, target) {
    // ...
  //loop through number array
    //for loop
  //add each number to every other number in the array
    //reduce or for loop
  //return any combination of numbers(indexes) that equal the target
    let arr = []
    let arr2 = []
    let targetNum
    for(let i=0; i < numbers.length;i++){
      targetNum = numbers[i]
      arr2 = numbers
      arr2.splice(i, 1)
      if(arr2.map(a => a + targetNum).includes(target)){
        arr.push(i)
        arr.push(arr2.map(a => a + targetNum).indexOf(target) + 1)
        return arr
      }
      arr2.splice(i, 0, targetNum)
    }
    return arr
  }