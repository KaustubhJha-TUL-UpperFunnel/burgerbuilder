import React from 'react';
import classes from './Input.module.css'


const input =(props)=>{
    let inputElement = null;
    const inputClasses = [classes.InputElement]

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }

    switch(props.elementType){
        case('input'):
            inputElement =<input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea 
                className={classes.inputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case('select'):
            inputElement=(
                <select
                    classname={classes.EnputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option=>(
                        <option key = {option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}

                </select>
            )

        default:
            inputElement = <input 
                className={classes.inputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
    }
    
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input