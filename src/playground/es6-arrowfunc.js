
// const getFirstName = (name) => name.split(' ')[0]
// console.log(getFirstName('Mike Smith'))

// Perks of using arrow functions
//arguments object - no longer bound with arrow functions

const add = (a, b)=>{
    return a+b
}
console.log(add(55, 1))

//this keyword - no longer bound

const user = {
    name: 'Raul',
    cities: ['Ensenada', 'Mexico City', 'Manzanillo', 'Merida'],
    printPlacesLived(){
        return this.cities.map((city)=>this.name + ' has lived in ' +     city+'!')
        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' has liven in ' + city)
        // }) 
    }
}
console.log(user.printPlacesLived())

//

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number)=>
         number * this.multiplyBy  
        )
    }
}
console.log(multiplier.multiply())