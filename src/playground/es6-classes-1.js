// const render = () => {
//     const template = (
//         <h1>fdsafdsa</h1>
//     )
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('app')

// render()

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

const me = new Person('Raul Hernandez', 25)
const you = new Person()
console.log(me.getDescription())