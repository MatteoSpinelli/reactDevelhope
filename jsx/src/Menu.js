import React from "react";
import { Card } from "./Card"
import { Alert } from "./Alert"


class Menu extends React.Component{
    some = ""
    render(){
        return (
            <div>
                <ul>
                    {this.props.vociMenu.map((el) => {
                        return <li>{el}</li>
                    })}
                </ul>
                {this.some.length > 0 ? <Card str = {this.some}/> : <Alert />}
            </div>
        )
    }
}

Menu.defaultProps = {
    vociMenu: ["pasta", "olio", "sale", "cipolle"]
}

export default Menu