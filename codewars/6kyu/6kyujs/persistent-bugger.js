function persistence(num) {
    let iter = 0;
     while(num >= 10){
       num = Array.from(num.toString()).reduce((x,y) => x * y);
       iter++;
     }
    return iter;
  }