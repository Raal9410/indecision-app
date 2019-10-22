'use strict';

console.log('App.js is running');

//JSX-Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Add task and let the app decide what you should do next.',
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

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var randomOption = app.options[randomNum];
    alert(randomOption);
};

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
            'button',
            { disabled: app.options.length === 0, onClick: makeDecision },
            'What should I do?'
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
