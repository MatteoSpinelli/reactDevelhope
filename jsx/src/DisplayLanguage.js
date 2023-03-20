import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContentx";

export function DisplayLanguage() {
    const lang = useContext(LanguageContext)
    return (

        <h1>The language is: {lang}</h1>

    )

}