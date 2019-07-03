import React from 'react';
import './wholepage.css';
import Headgrade from './first tab/headgrade';
import Cyanide from './second tab/cyanide';
import Grind from './third tab/grind';
import Recoverymodel from './fourth tab/recovery';


export default class Wholepage extends React.Component{
    state ={
        showHead:true,
        showCyanide:false,
        showGrind:false
    }
    headClicked = ()=>{
        this.setState({
            showHead:true,
            showCyanide:false,
            showGrind:false
        })
    }
    cyanideClicked = ()=>{
        this.setState({
            showHead:false,
            showCyanide:true,
            showGrind:false
        })
    }
    grindClicked=()=>{
        this.setState({
            showHead:false,
            showCyanide:false,
            showGrind:true
        })
    }
    render(){
        let head = null
        let cyanide = null
        let grind = null
        if (this.state.showHead){
            // head = <Headgrade />
        }
        if(this.state.showCyanide){
            cyanide=<Cyanide />
        }
        if(this.state.showGrind){
            grind = <Grind />
        }
        return (
            <div className="whole">
                <Header clickHead={this.headClicked} 
                    clickCyanide={this.cyanideClicked}
                    clickGrind={this.grindClicked}
                    />
                <Logo />
                {head}
                {cyanide}
                {grind}
                {/* <Cyanide /> */}
                {/* <Grind /> */}
                {/* <Recoverymodel /> */}
                <Recoverymodel />
            </div>
        )
    }
}

const Header =(props)=>{
    return (
        <div className="tabs">
            <div className="headersame" onClick={props.clickHead}>
                Headgrade vrs Extraction
            </div>
            <div className="headersame" onClick={props.clickCyanide}>
                Cyanide vrs Extraction
            </div>
            <div className="headersame" onClick={props.clickGrind}>
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