// Sum Numbers
function sum (numbers) {
    numbers.push(0);
    return numbers.reduce((x,y) => x + y);
};