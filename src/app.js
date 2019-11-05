import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))

// class OldSyntax{
//     constructor(){
//         this.name = 'Raul'
//     }
//     getGreeting(){
//         return `Hi. My name is ${this.name}`
//     }
// }

// const oldSyntax = new OldSyntax()
// const getGreeting = oldSyntax.getGreeting
// console.log(getGreeting())

class NewSyntax{
    name = 'Alberto'
    getGreeting = () => {
        return `Hi. My name is ${this.name}`
    }
}

const newSyntax = new NewSyntax()
const getGreeting = newSyntax.getGreeting
console.log(getGreeting())