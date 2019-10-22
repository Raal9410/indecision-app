const content = {
    text: 'Show details'
}
const showDetails= () => {
    if(content.text === 'Hide details'){
        content.text = 'Show details'
    } else{
        content.text = 'Hide details'
    }
renderApp()
}
const renderApp = () =>{
    const visibility = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>{content.text}</button>
            <div>{content.text === 'Hide details' ? 'Hey. These are some details you can now see!' : ''}
        </div>
        </div>
    )
    ReactDOM.render(visibility, appRoot)
}
const appRoot = document.getElementById('app')
renderApp()