function fillArray(array, num) {
    for (var i = 0; i < num; i++) {
        array[i] = i + 1;
    }
}
var numbers = [];
fillArray(numbers, 15);
console.log(numbers.includes(1));
