import React from 'react';
import {Link} from 'react-router-dom';
import "./navbarstyle.css"



const Navbar = (props) => {

    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/home">BookMarked</Link>
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
                        <Link className="nav-link" to="/bookentry">Add a Book</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/allbooks">All Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stats">Reading Stats</Link>
                    </li>
                </ul>
                
                <button className="btn btn-primary btn-md" id="logoutbtn">Log Out</button>
                <form className="form-inline mt-2 mt-md-0"></form>
            </div>
        </nav>

    );

}

export default Navbar;
