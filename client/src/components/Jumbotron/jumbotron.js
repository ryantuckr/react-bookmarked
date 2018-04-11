import React from 'react';
import {Link} from 'react-router-dom';
import "./jumbotron.css";


const Jumbotron = (props) => {

    return (
      <div className="container-fluid" id="background">
              <div className ="jumbotron">
          <h1 className="display-3">BookMarked</h1>
          <p>A lifetime of reading is a lot to keep track of.</p>
          <Link className="btn btn-primary btn-lg" id="pinkbutton" to="/bookentry" role="button">Add a Book &raquo;</Link>
          <Link className="btn btn-primary btn-lg" id="pinkbutton" to="/allbooks" role="button">All Books &raquo;</Link>
          <Link className="btn btn-primary btn-lg" id="pinkbutton" to="/stats" role="button">Reading Stats &raquo;</Link>
        </div>
      </div>
      


    )

};

export default Jumbotron;
