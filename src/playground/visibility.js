class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state={
            visibility: false
        }
    }
    handleToggle(){
        this.setState((prevState)=>{
            return ({visibility: !prevState.visibility})
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility? 'Hide details':'Show details'}</button>
                {this.state.visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>)}
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'))
// const content = {
//     text: 'Show details'
// }
// const showDetails= () => {
//     if(content.text === 'Hide details'){
//         content.text = 'Show details'
//     } else{
//         content.text = 'Hide details'
//     }
// renderApp()
// }
// const renderApp = () =>{
//     const visibility = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>{content.text}</button>
//             <div>{content.text === 'Hide details' ? 'Hey. These are some details you can now see!' : ''}
//         </div>
//         </div>
//     )
//     ReactDOM.render(visibility, appRoot)
// }
// const appRoot = document.getElementById('app')
// renderApp()