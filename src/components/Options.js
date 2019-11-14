import React from 'react'
import Option from './Option'

const Options = (props) =>{
    return(
        <div>
            {props.options.length === 0 && <p>Add an option!</p>}
            <button className='button button--link'
            onClick={props.handleDeleteOptions}>
                Remove All
                </button>
            {
                props.options.map((option)=>(
                    <Option key={option} 
                    optionText={option}
                    handleDeleteOneOption={props.handleDeleteOneOption}/>))
                }
        </div>
    )
}

export default Options