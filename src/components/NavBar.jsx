import React from "react"

export class NavBar extends React.Component{
    render(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand" href="/">Navbar</a>
                    </div>
                </nav>
            </React.Fragment>    
        )
    }
}