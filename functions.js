function firstPrint() {
    console.log("I am first line")
}

function secondPrint() {
    console.log("I am second line")
}

function thirdPrint() {
    console.log("I am third line")
}

setTimeout(firstPrint, 3000);
setTimeout(secondPrint, 1000);
setTimeout(thirdPrint, 2000);

firstPrint = () => {
    console.log("I am first line")
}
firstPrint = () => {
    console.log("I am first line")
}

const func1 = (cb) => {
    return cb(1)
}

const func2 = (x) => {
    console.log("I am from func2. The value of X is: ", x)
}

func1(func2)
