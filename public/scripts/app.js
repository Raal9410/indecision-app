'use strict';

console.log('App.js is running');

//JSX-Javascript XML
var app = {
    title: 'Hello World',
    subtitle: 'This is an Indecision App'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
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
    name: 'Raul',
    age: '25',
    location: 'Mexico City'

    // var userName = 'Raul'
    // var userLastName = 'Hernandez'
    // var userAge = '25'
    // var userLocation = 'Mexico City'
};var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
