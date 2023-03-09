import React from "react";
import { LanguageContext } from "./LanguageContentx";

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {(value) => {
                    return <h1>The language is: {value}</h1>
                }}
            </LanguageContext.Consumer>
        )

    }
}