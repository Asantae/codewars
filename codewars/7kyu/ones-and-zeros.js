const binaryArrayToNumber = arr => {
    arr.reverse();
    var newArr = [];
    const element = 1;
    let idx = arr.indexOf(element);
    for(i=0; i<arr.length;i++){
      if(idx != -1){
        newArr.push(idx);
        idx = arr.indexOf(element, idx + 1)
      }
    }
    return newArr.map(x => Math.pow(2, x)).reduce((a,b) => a+b);
  }