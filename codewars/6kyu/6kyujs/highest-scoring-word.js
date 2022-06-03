function high(x){
    const alphabet = " abcdefghijklmnopqrstuvwxyz".split("");
    let arr = x.split(' ').map(x => x.split(''));
    let index = 0;
    let oldVal = 0;
    for(i=0; i < arr.length; i++){
      let value = arr[i].map((a) => alphabet.indexOf(a)).reduce((a,b) =>  a + b);
      if(oldVal < value){
        oldVal = value;
        index = i;
      } 
    }
    return  arr[index].join('');
  }