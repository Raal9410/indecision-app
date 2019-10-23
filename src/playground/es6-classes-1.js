
class Person {
    constructor(name = 'John Doe', age = 0){
        this.name = name
        this.age = age
    }
    getGreeting(){
        return `Hi, I'm ${this.name}!` 
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
    return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        if(this.hasMajor()){
            description += ` And his/her major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
    hasLocation(){
        return !!this.location
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.hasLocation()){
            greeting += ` I'm visiting from ${this.location}.`
        }
        return greeting
    }
}

const me = new Traveler('Raul Hernandez', 25, 'Mexico City')
const you = new Traveler(undefined, undefined, 'Nowhere')
console.log(me.getGreeting())
console.log(you.getGreeting())