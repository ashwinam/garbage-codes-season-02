// 26. Capitalize Words

/*
Write a function that capitalizes each word in a given input string.
*/

String.prototype.capitalize = function () {
    let value = this.valueOf();
    return value.split(" ").map(ele => ele.replace(ele, ele[0].toUpperCase() + ele.slice(1))).join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.capitalize()); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'