import React from 'react';
import BurgerLogo from '../../../src/Assets/Images/burger-logo.png'
import classes from './Logo.module.css'
const logo =(props)=>(
    <div className={classes.Logo}>
        <img src={BurgerLogo}/>
    </div>
)
    


export default logo