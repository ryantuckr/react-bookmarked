import React from 'react';
import Navbar from "../Navbar/navbar";
import ShowBookButton from './Showbookbutton';
import axios from 'axios';

var button = {
  backgroundColor: '#f53f51',
  border: "#f53f51"
};
class AllBooks extends React.Component {

  
  // Setting the initial state of the component
  state = {
    dbBooks: []
  };

  

  bookButton = event => {
    console.log("get books button clicked");

  

    axios
      .get("/api/allbooks/")
      .then((response) => {
        console.log(response.data);

        this.setState({dbBooks: response.data});

      })
      .catch((error) => {
        console.log(error);
      });
  };

  removeBook = event => {
    console.log("remove button was clicked")

    axios
      .get("/api/delete")
      .then((response) => {
        console.log(response.data);

        this.setState({dbBooks: response.data});

      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <Navbar/>
        <ShowBookButton bookButton={this.bookButton}/>

        <div className='card-body'>
          {this
            .state
            .dbBooks
            .map(book => {
              return (
                <div key={book._id}>
                  <h3>Title: {book.title}</h3>
                  <img src={book.thumbnail} alt=""/>

                  <h6>Author(s): {book.authors}</h6>
                  <h6>Pages: {book.pages}</h6>
                  {book.description}
                  <br></br>
                  <button
                  style={button}
                    className="btn btn-primary btn-md"
                    type="button"
                    onClick={this.removeBook}>Remove</button>
                  <hr></hr>
                </div>
              )
            })
}
        </div>

      </div>
    );
  }
}

export default AllBooks;
