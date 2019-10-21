console.log('App.js is running')

//JSX-Javascript XML

var template = (
<div>
    <h1>Raul</h1>
    <p>This is some info</p>
    <ul>
        <li>Item one</li>
        <li>Item two</li>
    </ul>
</div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)