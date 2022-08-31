function squareDigits(num){
    return parseInt(String(num).split('').map(Number).map(x => Math.pow(x, 2)).join(''))
  }