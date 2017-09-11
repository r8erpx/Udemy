
// printReverse
console.log("<--- printReverse --->");

function printReverse(arg) {
    for (var i = arg.length-1; i >= 0; i--) {
        console.log(arg[i]);
    }
}

printReverse(['b', 'c', 'c', 'c', 'c']);

console.log("");


// isUniform
console.log("<--- isUniform --->");

function isUniform(arg) {
    for (var i = 1; i < arg.length; i++) {
        if (arg[0] !== arg[i]) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

isUniform(['a', 'a', 'a', 'a']);

console.log("");


// sumArray
console.log("<--- sumArray --->");

function sumArray(arg) {
    var sum = 0;
    for (var i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    console.log(sum);
}


sumArray([1, 2, 3, 4, 50]);

console.log("");

// max
console.log("<--- max --->");

function max(arg) {
    var maximum = arg[0];
    for (var i = 1; i < arg.length; i++) {
        if (arg[i] > maximum)
            maximum = arg[i];
    }
    console.log(maximum);
    return maximum;
}


max([-5, 100,1000, 123123,134534]);

