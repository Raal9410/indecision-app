console.log('App.js is running')

//JSX-Javascript XML
const app = {
    title: 'Hello World',
    subtitle: 'This is an Indecision App',
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
const numbers = [55, 101, 1000]
const renderIndecisionApp=()=>{
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length>0 ? 'Here are your options' : 'No options'}
        <p>{app.options.length}</p>
        <button onClick={removeAll}> Remove All</button>
        {/* {
            numbers.map((number, i)=>{
                return <p key={i}>Number:{number}</p>
            })
        } */}
        <ul>
            {app.options.map((option, i)=>{
                return <li key={i}>{option}</li>
            })}
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