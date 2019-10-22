'use strict';

console.log('App.js is running');

//JSX-Javascript XML
var app = {
    title: 'Hello World',
    subtitle: 'This is an Indecision App',
    options: ['One', 'Two']

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
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options.length > 0 ? 'Here are your options' : 'No options',
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: '',
    age: '25',
    location: 'Mexico City'

    // var userName = 'Raul'
    // var userLastName = 'Hernandez'
    // var userAge = '25'
    // var userLocation = 'Mexico City'

};var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
