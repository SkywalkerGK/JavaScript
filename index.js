for (let i = 1 ; i <= 12 ; i++) {
    if (i % 2 === 0) {
        console.log('Continue')
        continue
    }
    else if (i === 9) {
        break;
    }
    console.log(i)
}
console.log('break')

