import React from "react"
import {v4 as uuidv4 } from "uuid"

export class Form extends React.Component{

    constructor({addItem}){
        super()
        this.state={
            uuid:uuidv4(),
            name:"",
            content:""
        }
        this.addItem=addItem
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeContent=this.onChangeContent.bind(this)
        this.addItemClick=this.addItemClick.bind(this)
    }

    onChangeName(event){
        this.setState({name:event.target.value})
    }

    onChangeContent(event){
        this.setState({content:event.target.value})
    }

    addItemClick(){
        this.addItem(this.state)
        this.setState({uuid:uuidv4(),name:"",content:""})
    }

    render(){
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h5 className="card-title">Form</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.onChangeName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content</label>
                            <input type="text" className="form-control" placeholder="Content" value={this.state.content} onChange={this.onChangeContent}/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary" onClick={this.addItemClick}>Add</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}