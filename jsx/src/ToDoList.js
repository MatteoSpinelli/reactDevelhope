import React from "react"

export class ToDoList extends React.Component{
    _input = React.createRef()
    state = {
        items: [
            "Make dinner",
            "Do homework",
            "Clean house"
        ]
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                items: [...state.items, this._input.current.value]
            }
        })
    }


    render(){
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <input ref={this._input} type="text" />
                <button onClick={this.handleClick}>Add item</button>
            </div>

        )
    }
}