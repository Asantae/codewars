function countingSort(arr) {
    let freqArr = new Array(100).fill(0)
    for(let i = 0; i < arr.length; i++){
        let position = arr[i]
        freqArr[position]++
    }
    return freqArr
}