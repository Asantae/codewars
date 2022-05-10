function isIsogram(str){
    var arr = str.toLowerCase().split('');
    arr.sort();
    for(i=0; i<arr.length;i++){
      if(arr[i]==arr[i-1]){
        return false;
      }
    }
    return true;
  }