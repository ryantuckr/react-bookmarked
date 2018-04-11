import React from 'react';




const ShowBookButton = (props) => {

    var button = {
        backgroundColor: '#f53f51',
        border: "#f53f51"
    }
    
    return (
        <button style={button}className="btn btn-primary btn-md" onClick={props.bookButton}>Display all Read Books</button>

    );

}

export default ShowBookButton;