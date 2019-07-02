import React from 'react';
import './wholepage.css';
import Headgrade from './first tab/headgrade';
import Cyanide from './second tab/cyanide';
import Grind from './third tab/grind';


export default class Wholepage extends React.Component{
    render(){
        return (
            <div className="whole">
                <Header />
                <Logo />
                {/* <Headgrade /> */}
                {/* <Cyanide /> */}
                <Grind />
            </div>
        )
    }
}

const Header =(props)=>{
    return (
        <div className="tabs">
            <div className="headersame" onClick={props.clickGrind}>
                Headgrade vrs Extraction
            </div>
            <div className="headersame" onClick={props.clickCyanide}>
                Cyanide vrs Extraction
            </div>
            <div className="headersame" onClick={props.clickHeadgrade}>
                Grind vrs Extraction
            </div>
            <div className="headersame" onClick={props.clickRecovery}>
                Recovery Model
            </div>

        </div>
    )
}

const Logo =()=>{
    return(
        <div className="Logo">
             
        </div>
    )
}