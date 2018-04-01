import React from 'react';
import "./allbooksstyle.css"

const AllBooks = (props) => {

    return (
        <div className="card">
            <img className="card-img-top" src="..." alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">Book Title</h5>
                <p className="card-text">Book Description</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Author</li>
                <li className="list-group-item">Pages</li>
                
            </ul>
            <div className="card-body">
            <a className="btn btn-primary btn-lg" href="" role="button">Remove</a>
                
            </div>
        </div>
    )

};

export default AllBooks;