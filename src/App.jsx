import React from "react"
import { List } from "./components/List"
import { NavBar } from "./components/NavBar"
import { Form } from "./components/Form"

export class App extends React.Component{

    constructor(){
        super()
        this.state={items:[]}
        this.addItem=this.addItem.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
    }

    addItem(item){
        this.state.items.push(item)
        this.setState({items:this.state.items})
    }

    deleteItem(item){
        const index=this.state.items.indexOf(item)
        this.state.items.splice(index,1)
        this.setState({items:this.state.items})
    }
    
    render(){
        return (
            <React.Fragment>
                <NavBar/>
                <div style={{width:"80%",margin:"5% auto"}}>
                    <Form addItem={this.addItem}/>
                    <List items={this.state.items} deleteItem={this.deleteItem}/>
                </div>
            </React.Fragment>
        )
    }
}