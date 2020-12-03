var isMomHappy = true

var willIGetNewPhone = new Promise(
    function(accepte,refuse){
        if(isMomHappy){
            var phone = {
                brand:'Samsung',
                color:'Black'
            };
            accepte(phone)
        }else{
            var reason = new Error('Pas de tel : Mom is not happy')
            refuse(reason)
        }
    }
)

var askMom = function(){
    willIGetNewPhone.then(function(resultat){
        console.log(resultat)
    }).catch(function(error){
        console.log(error.message)
    })
}

// askMom()



const random_in_a_b = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const generate_2 = () => {
    return new Promise(succes => {
        var result = random_in_a_b(1, 1000000)
        while (result != 2) {
            result = random_in_a_b(1, 1000000)
        }
        succes("succés")
    })
}

generate_2().then(abc => {
    console.log(abc+'!!!!!!!!')
})

const a = 2
const b = 4

console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
console.log('a+b = '+(a+b))
