function concatFunc(str1, str2) {
    return str1 + str2
}

let s = concatFunc("Programmo", "Phobia")
console.log(s)

function lowercaseFunc(str) {
    return str.toLowerCase()
}

console.log(lowercaseFunc(s))

function uppercaseFunc(str) {
    return str.toUpperCase()
}

console.log(uppercaseFunc(s))

function splitString(str) {
    return str.split(",")
}

console.log(splitString("Programmo,Phobia"))

function findIndex(str) {
    return str.indexOf("Phobia")
}

console.log(findIndex(s))
