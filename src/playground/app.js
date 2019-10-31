class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this)
        this.state ={
            options: []
        }
    }
    //lifecycle methos
    componentDidMount(){
       try{
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if(options){
            this.setState(()=>({options}))
        }
       }
       catch(e){
           //Do nothing at all
       } 

        //console.log('fetching data')
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
        // console.log('saving data')
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    //
    handleDeleteOptions(){
     this.setState(()=>({options:[]}))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const randomOption = this.state.options[randomNum]
        alert(randomOption)
    }

    handleDeleteOneOption(optionToRemove){
        this.setState((prevState)=>({options: prevState.options.filter((option)=> optionToRemove !== option)
        }))
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item.'
        } else if (this.state.options.indexOf(option)>-1){
            return 'This option already exists'
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer.'
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions} 
                handleDeleteOneOption={this.handleDeleteOneOption}/>
                <AddOption addOption={this.handleAddOption}/>
            </div>
        )
    }
}

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?</button>
        </div>
    )
}


const Options = (props) =>{
    return(
        <div>
            {props.options.length === 0 && <p>Add an option!</p>}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option)=>(
                    <Option key={option} 
                    optionText={option}
                    handleDeleteOneOption={props.handleDeleteOneOption}/>))
                }
        </div>
    )
}
const Option = (props)=>{
    return(
        <div>
        {props.optionText}
        <button onClick={(e)=>{
            props.handleDeleteOneOption(props.optionText)
        }}>Remove</button>
        </div>
        )
        }

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.addOption(option)
        this.setState(()=>({error}))
        if(!error){
            e.target.elements.option.value = ''
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" placeholder="Add Option" name="option"/>
                <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// Stateless functional component
// const User = (props) =>{
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))