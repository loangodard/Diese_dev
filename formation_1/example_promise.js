const random_in_a_b = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const generate_2 = () => {
    return new Promise(callback => {
        var result = random_in_a_b(1, 1000000)
        while (result != 2) {
            result = random_in_a_b(1, 1000000)
        }
        callback("succés")
    })
}

const promise = generate_2().then(result => {
    console.log(result)
})

const a = 2
const b = 4

console.log('a+b = '+(a+b))

const Hello = () => {
    return new Promise(callback => {
        callback('Hello')
    })
}

Hello().then(result => {
    const HelloWorld = result + ' World'
    console.log(HelloWorld)
})