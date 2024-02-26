// Moving an element

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, -1);

console.log(output); // [2,1,3,4]

function move(array, index, offset) {
    const output = [];
    let elementsToMove = array[index]
    const position = index + offset
    if (position >= array.length || position < 0) {
        console.error("Invalid Offset.");
        return;
    }


    for (let element of array) {
        if (element !== elementsToMove)
            output.push(element);
    }

    output.splice(position, 0, elementsToMove);

    return output;
}