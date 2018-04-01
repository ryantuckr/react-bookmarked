import React from 'react';
import "./navbarstyle.css";

const Navbar = (props) => {

    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">BookMarked</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/bookentry">Add a Book</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/allbooks">All Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/stats">Reading Stats</a>
                    </li>
                </ul>
                
                <button onClick = {props.handleLogout}>Log Out</button>
                <form className="form-inline mt-2 mt-md-0"></form>
            </div>
        </nav>

    );

}

export default Navbar;
