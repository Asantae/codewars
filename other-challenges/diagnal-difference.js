function diagonalDifference(arr) {
    let leftDiagnal = 0
    let rightDiagnal = 0
    for(let i = 0; i < arr.length; i++){
        leftDiagnal += arr[i][i]
        rightDiagnal += arr[i][(arr.length - i)-1]
    }
    return Math.abs(rightDiagnal - leftDiagnal)
}
