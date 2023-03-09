import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContentx";

export class App extends React.Component{
    state = {
        language: "en"
    }
    
    render(){
        return (
            <div>
                <select onChange={(evt) => {
                    this.setState({
                        language: evt.target.value
                    })
                }}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}