import React from 'react'

import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
import NavigationItems from './NavigationItems';
//import { exportAllDeclaration } from '@babel/types';

configure({adapter:new Adapter()});

describe('<NavigationItems/>',()=>{
    let wrapper;
    
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems/>)
    })

    it('should render two <NavigationItems/> elements if not authenticated',()=>{
         
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItems/> elements if  authenticated',()=>{
        //wrapper = shallow(<NavigationItems isAuthenticated/>)
        wrapper.setProps({
            isAuthenticates:true
        })
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });


    it('should render two <NavigationItems/> elements if not authenticated',()=>{
        wrapper.setProps({
            isAuthenticates:true
        }) 
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});