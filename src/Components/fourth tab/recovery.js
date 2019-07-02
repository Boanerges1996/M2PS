import React from 'react';
import './recovery.css';


export default class Recoverymodel extends React.Component{
    render(){
        return(
            <div className="recovery">
                <div className="firstPart">
                    <h2>Input Variables</h2>
                    <table>
                        <tr>
                            <td>Cyanide Concentration</td>
                            <td><input type="text"/></td>
                            <td>ppm</td>
                        </tr>
                        <tr>
                            <td>% Passing 75 micron</td>
                            <td><input type="text"/></td>
                            <td>%</td>
                        </tr>
                        <tr>
                            <td>Head Grade</td>
                            <td><input type="text"/></td>
                            <td>g/t</td>
                        </tr>
                    </table>
                    <br />
                    <hr />
                    <h2>Output</h2>
                    <h5>Calculated recovery based on model</h5>
                    <table>
                        <tr>
                            <td><span></span></td>
                        </tr>
                    </table>

                </div>
                <div className="secondPart">

                </div>

            </div>
        )
    }
}