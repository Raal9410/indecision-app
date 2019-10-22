'use strict';

console.log('App.js is running');

//JSX-Javascript XML
var app = {
    title: 'Hello World',
    subtitle: 'This is an Indecision App',
    options: []

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
    // }]

};var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(e);
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderIndecisionApp();
};

var removeAll = function removeAll() {
    app.options = [];
    renderIndecisionApp();
};
var numbers = [55, 101, 1000];
var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            ' Remove All'
        ),
        React.createElement(
            'ul',
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderIndecisionApp();
