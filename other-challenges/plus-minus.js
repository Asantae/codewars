function plusMinus(arr) {
    let negative = 0
    let positive = 0
    let neutral = 0
    let total = arr.length
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            negative++
        } if(arr[i] > 0) {
            positive++
        } if(arr[i] == 0) {
            neutral++
        }
    }
    console.log((positive/total).toFixed(6))
    console.log((negative/total).toFixed(6))
    console.log((neutral/total).toFixed(6))

}