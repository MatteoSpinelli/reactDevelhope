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
            const value = this._input.current.value
            this._input.current.value = ""
            return {
                items: [...state.items, value]
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