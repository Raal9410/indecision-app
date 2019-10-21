'use strict';

console.log('App.js is running');

//JSX-Javascript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Raul'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
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
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
