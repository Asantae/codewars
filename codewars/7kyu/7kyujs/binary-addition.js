function addBinary(a,b) {
    //add two nums
    //return sum in bin
      //Divide the total by 2.
      //Get the integer quotient for the next iteration.
      //Get the remainder for the binary digit.
      //Repeat the steps until the quotient is equal to 0.
    //convert to str
  
    var total = a + b;
    var arr = [];
    var result = '';
    var quo = Math.floor(total/2);
    var rem = Math.ceil((total/2)%quo);
    arr.push(rem);
    while(quo!= 0){
      total = Math.floor(total/2);
      quo = Math.floor(total/2);
      rem = Math.ceil((total/2)%quo);
      if(Number.isNaN(rem)){rem = 1;}
      arr.push(rem);
    }
    return arr.reverse().join('').toString();  
  }