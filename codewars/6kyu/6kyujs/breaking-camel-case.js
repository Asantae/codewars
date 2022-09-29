function solution(string) {
    for(let i = 0; i < string.length; i++){
      if(string[i] !== string[i].toLowerCase()){
        let beg = string.slice(0, i) + ' '
        let end = string.slice(i)
        string = beg + end
        i++
      }
      
    }
  return string
}