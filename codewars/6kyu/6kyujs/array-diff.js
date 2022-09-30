function arrayDiff(a, b) {
    for(let i = 0; i < b.length; i++){
      for(let j = 0; j < a.length; j++){
        if(a[j] == b[i]){
          a = a.filter( a => a != b[i])
        }
      }
    }
    return a
  }