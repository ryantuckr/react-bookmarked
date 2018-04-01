import React from 'react';
import "./jumbotronstyle.css";

const Jumbotron = (props) => {

    return (
      <div className="container-fluid">
              <div className ="jumbotron">
          <h1 className="display-3">BookMarked</h1>
          <p>A lifetime of reading is a lot to keep track of.</p>
          <a className="btn btn-primary btn-lg" href="/bookentry" role="button">Add a Book &raquo;</a>
          <a className="btn btn-primary btn-lg" href="/allbooks" role="button">All Books &raquo;</a>
          <a className="btn btn-primary btn-lg" href="/stats" role="button">Reading Stats &raquo;</a>
        </div>
      </div>
      


    )

};

export default Jumbotron;
