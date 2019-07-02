import React from 'react';
import './wholepage.css';


export default class Wholepage extends React.Component{
    render(){
        return (
            <div className="whole">
                <Header />
                <Logo />
            </div>
        )
    }
}

const Header =(props)=>{
    return (
        <div className="tabs">
            <div className="headersame" onClick={props.clickGrind}>
                Extraction vrs Grind
            </div>
            <div className="headersame" onClick={props.clickCyanide}>
                Extraction vrs Cyanide
            </div>
            <div className="headersame" onClick={props.clickHeadgrade}>
                Extraction vrs Headgrade
            </div>
            <div className="headersame" onClick={props.clickRecovery}>
                Recovery Sheet
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