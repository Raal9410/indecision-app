console.log('App.js is running')

//JSX-Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Add task and let the app decide what you should do next.',
    options: []
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
// }]

const onFormSubmit = (e) => {
    e.preventDefault(e)
    const option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
    }
renderIndecisionApp()
}

const removeAll = () =>{
    app.options = []
    renderIndecisionApp()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const randomOption = app.options[randomNum]
    alert(randomOption)
}

const renderIndecisionApp=()=>{
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length>0 ? 'Here are your options' : 'No options'}
        <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
        <button onClick={removeAll}> Remove All</button>
        <ul>
            {app.options.map((option, i)=> <li key={i}>{option}</li>)}
        </ul>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
    </div>
    )
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

renderIndecisionApp()