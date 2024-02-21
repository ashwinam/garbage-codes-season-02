/*
Write a function that calculates its a landscape or a portrait

logic: 
    if width is greater than height then its landscape else its portrait.
*/

function isLandscape(width, height) {
    return width > height;
}

console.log(isLandscape(3200, 3200));