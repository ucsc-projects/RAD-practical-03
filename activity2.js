function andFunc(bool1, bool2) {
    return bool1 && bool2
}

console.log(andFunc(true, false))
console.log(andFunc(true, true))
console.log(andFunc(false, false))

function typeFunc(num) {
    return typeof num
}

console.log(typeFunc(5))

function dateTypeFunc(date1) {
    console.log(typeof date1)
}

dateTypeFunc(new Date())

function compareLength(str) {
    if (str.length > 10) {
        console.log("This string:" + str + " length is greater than 10")
    } else {
        console.log("This string:" + str + " length is not greater than 10")
    }
}

let s = "OceanGate"

compareLength(s)
