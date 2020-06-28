// LoopingaTriangle
// 编写一个循环，调用7次console.log函数，打印出如下的三角形:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// for (let i = "#"; i.length < 8; i += "#") {
// console.log(i);
// }

// FizzBuzz
// 编写一个程序，使用console.log打印出从1到100的所有数字。不过有两种例外情况：当
// 数字能被3整除时，不打印数字，而打印“Fizz”。当数字能被5整除时(但不能被3整除),
// 不打印数字，而打印“Buzz”。
//
// 当以上程序可以正确运行后，修改程序，让程序在遇到能同时被3与5整除的数字时，打
// 印出"FizzBuzz"。

// for (let i = 1; i < 101; i++) {
// if (i % 3 == 0) {
// console.log("Fizz");
// } else if (i % 5 == 0) {
// console.log("Buzz");
// } else {
// console.log(i);
// }
// }

// 棋盘
// 编写一个程序，创建一个字符串，用于表示8*8的网格，并使用换行符分隔行。网格中的
// 每个位置可以是空格或“#”。这些字符组成了一张棋盘。
// let s = "";
// for (let i = 0; i < 64; i++) {
// if (i % 8 == 0 && i != 0) {
// s += "\n";
// }

// if (Math.floor(i / 8) % 2 == 0) {
// if (i % 2 == 0) {
// s += " ";
// } else if (i % 2 == 1) {
// s += "#";
// } else {
// console.error("xx");
// }
// } else if (Math.floor(i / 8) % 2 == 1) {
// if (i % 2 == 1) {
// s += " ";
// } else if (i % 2 == 0) {
// s += "#";
// } else {
// console.error("xx");
// }
// } else {
// console.error("yy");
// }
// }
// console.log(s);
