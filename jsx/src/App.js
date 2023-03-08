import React from "react";
import { ToDoList } from "./ToDoList";

export class App extends React.Component{
    onlogin(data){
        console.log(data)
    }
    render(){
        return (
            <div>
                <ToDoList />
            </div>
        )
    }
}