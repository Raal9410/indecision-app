console.log('App.js is running')

//JSX-Javascript XML
var app = {
    title: 'Hello World',
    subtitle: 'This is an Indecision App'
}
var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ul>
        <li>Item one</li>
        <li>Item two</li>
    </ul>
</div>
)

var user = {
    name: 'Raul',
    age: '25',
    location: 'Mexico City' 
}

// var userName = 'Raul'
// var userLastName = 'Hernandez'
// var userAge = '25'
// var userLocation = 'Mexico City'
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)