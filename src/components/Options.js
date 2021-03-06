// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Option from './Option';

const Options = (props) =>{
    return(
        <div>
            <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
                <button className='button button--link'
            onClick={props.handleDeleteOptions}>
                Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className='widget__message'>Add an option to start!</p>}
            {
                props.options.map((option, i)=>(
                    <Option key={option} 
                    optionText={option}
                    count={i+1}
                    handleDeleteOneOption={props.handleDeleteOneOption}/>))
                }
        </div>
    )
}

export default Options