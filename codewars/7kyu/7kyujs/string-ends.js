function solution(str, ending){
    var newArr = str.split('');
    var lastArr = ending.split('');
    var remove = newArr.length - lastArr.length;
    newArr.splice(0,remove);
    return newArr.join('') === lastArr.join('')
  }