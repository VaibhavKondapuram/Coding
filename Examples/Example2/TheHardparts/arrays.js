const array = [1, 2, 3];
function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i< array.length; i++) {
        output.push(array[i] *2);
    }
    return output;
}

const result = copyArrayAndMultiplyBy2(array);
console.log(result);