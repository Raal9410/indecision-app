console.log('App.js is running')

//JSX-Javascript XML
var app = {
    title: 'Hello World',
    subtitle: 'This is an Indecision App',
    options: ['One', 'Two']
}

// function optionsRender (arr) {
//     if(arr.length>0){
//         arr.forEach((option)=>{
//             return <div>
//                 <p>Here are your options</p>
//                 <li>{option}</li></div>
//         })
//     } else {
//         return <p>No options</p>
//     }
// }
var template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length>0 ? 'Here are your options' : 'No options'}
    <ul>
        <li>Item one</li>
        <li>Item two</li>
    </ul>
</div>
)

var user = {
    name: '',
    age: '25',
    location: 'Mexico City' 
}

// var userName = 'Raul'
// var userLastName = 'Hernandez'
// var userAge = '25'
// var userLocation = 'Mexico City'

const getLocation = (location) => {
    if (location){
        return <p>Location: {location}</p>
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)