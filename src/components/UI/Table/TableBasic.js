import React from 'react';
import Basic1 from './Basic1';
import Basic2 from './Basic2';
import Basic3 from './Basic3';


export default class TableBasic extends React.Component{ 
    
    render(){
        return(
            <div>
                <Basic1 />    
                <Basic2 />                
                <Basic3 />   
            </div>
            
        )
    }
}