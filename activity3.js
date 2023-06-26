const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"]

function indexArr(array1, str) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == str) {
            return i;
        }
    }
}

console.log(indexArr(games, "God of War"))


var arr = {"Name": "John", "Age": "30", "City": "Colombo"}

const key = ["Name", "Age", "City"]
const value = ["John", "Age", "City"]

function createMap(keyArr, valArr) {
    let map1 = new Map()
    for (let i = 0; i < keyArr.length; i++) {
        map1.set(keyArr[i], valArr[i])
    }
    return map1
}

let map2 = createMap(key, value)
console.log(map2)

function deleteElement(currMap, delKey) {
    currMap.delete(delKey)
    return currMap
}

console.log(deleteElement(map2, "Age"))
console.log(map2)

let map3 = new Map()

map3.set("apple", 5)
map3.set("banana", 3)
map3.set("orange", 2)

console.log(map3.get("banana"))
console.log(map3.size)