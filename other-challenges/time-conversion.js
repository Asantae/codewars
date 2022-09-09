function timeConversion(s) {
    if(s.split(':')[2].split('')[2] == 'P'){
        let newStr = s.replace('PM', '')
        if(parseInt(newStr.split(':')[0]) < 12){
            return newStr.replace(newStr.split(':')[0], parseInt(newStr.split(':')[0]) + 12)
        } else {
           return s.replace('PM', '')
        }
    }
    if(s.split(':')[2].split('')[2] == 'A'){
        let newStr = s.replace('AM', '')
        if(parseInt(newStr.split(':')[0]) === 12){
            return 0 + newStr.replace(newStr.split(':')[0], parseInt(newStr.split(':')[0]) - 12)
        } else {
            return s.replace('AM', '')
        }
    }
}