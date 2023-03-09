import React from "react";
import { ToDoList } from "./ToDoList";

export class App extends React.Component{
    onlogin(data){
        console.log(data)
    }
    renderItems = (items, removeCallback) => {
        console.log(items)
        return items.map((item, index) => {
            return (<li key={index}>
                {item}
                <button onClick={() => {
                    removeCallback(index)
                }}>Remove</button>
            </li>)
        })
    }
    render(){
        return (
            <div>
                <ToDoList render = {this.renderItems} />
            </div>
        )
    }
}