class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer.'
        const options = ['Pizza', 'Lassagna', 'Sushi']
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(    
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.options.map((option, i)=>{
                        return <li key={i}><Option  optionText={option}/></li>
                    })}
                </ul>
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="Add Option"/> <button>Add Option</button>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))