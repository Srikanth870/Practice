const addupSingle = (value) => {
    let digit = value.toString().split('').map(i => {
        return (i * 1)
    })
    console.log(digit)
    const singleNum = digit.reduce((a, b) => a + b)
    if (singleNum > 9) {
        addupSingle(singleNum)
    } else {
        console.log(singleNum)
    }
}
addupSingle(001010101)