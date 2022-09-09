function miniMaxSum(arr) {
    arr.sort((a,b) => a-b)
    let minimum = (arr[0] + arr[1] + arr[2] + arr[3])
    let maximum = (arr[4] + arr[1] + arr[2] + arr[3])
    console.log(`${minimum} ${maximum}`)

}