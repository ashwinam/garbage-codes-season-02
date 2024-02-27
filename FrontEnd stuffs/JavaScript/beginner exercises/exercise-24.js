// Create a sum function


function sum(...param) {
    if (param.length === 1 && Array.isArray(param[0]))
        param = [...param[0]]

    return param.reduce((a, b) => a + b)
}

const output = sum(1, 2, 3, 4, 5);