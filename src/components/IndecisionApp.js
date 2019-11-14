import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './Modal'


class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption: undefined
    }
    //lifecycle methods
    componentDidMount () {
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
    componentDidUpdate (prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
        // console.log('saving data')
        }
    }
    componentWillUnmount () {
        console.log('componentWillUnmount')
    }
    //
    handleDeleteOptions = () => {
     this.setState(()=>({options:[]}))
    }
    handleModal = () =>{
        this.setState(()=>({selectedOption: undefined}))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const randomOption = this.state.options[randomNum]
        this.setState(()=>({selectedOption: randomOption}))
    }

    handleDeleteOneOption = (optionToRemove) => {
        this.setState((prevState)=>({options: prevState.options.filter((option)=> optionToRemove !== option)
        }))
    }

    handleAddOption = (option) => {
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
                <div className='container'>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <div className='widget'>
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions} 
                handleDeleteOneOption={this.handleDeleteOneOption}/>
                <AddOption addOption={this.handleAddOption}/>
                </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleModal={this.handleModal}/>
            </div>
        )
    }
}

export default IndecisionApp