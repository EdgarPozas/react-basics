import React from "react"
import {Item} from "./Item"

export class List extends React.Component{

    constructor({items,deleteItem}){
        super()
        this.items=items
        this.deleteItem=deleteItem
    }

    render(){
        return (
            <React.Fragment>
                <div className="d-flex mt-5 justify-content-center" style={{"flex-wrap":"wrap"}}>
                    {
                        this.items.map(item=> <Item key={item.uuid} item={item} deleteItem={this.deleteItem}/>)
                    }
                </div>
            </React.Fragment>
        )
    }
}
