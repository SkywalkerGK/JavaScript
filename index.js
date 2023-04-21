function getPyrmidArea(length,width,height) {
    let base = length * width
    let pyraminVolume = 1/3 * base * height
    console.log(pyraminVolume)
    return pyraminVolume
}

let area1 = getPyrmidArea(2,2,3)
let area2 = getPyrmidArea(4,5,6)

console.log('Area 1 = ' + area1 + ' Area 2 = ' + area2)

