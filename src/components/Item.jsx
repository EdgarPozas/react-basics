import React from "react"

export class Item extends React.Component{

    constructor({item,deleteItem}){
        super()
        this.item=item
        this.deleteItem=deleteItem
        this.deleteItemClick=this.deleteItemClick.bind(this)
    }

    deleteItemClick(){
        this.deleteItem(this.item)
    }

    render(){
        return (
            <React.Fragment>
                <div className="card shadow rounded m-2" style={{width: "20%"}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.item.name}</h5>
                        <p className="card-text">{this.item.content}</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-danger" onClick={this.deleteItemClick}>Delete</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
