function lonelyinteger(a) {
    let uniqueArr = []
    let newArr = a.sort((a,b) => a - b)
    for(let i=0; i < a.length; i++){
        if((newArr[i] == a[i+1])){
            i++
        } else {
            uniqueArr.push(newArr[i])
        }
    }
    return uniqueArr[0]
}
