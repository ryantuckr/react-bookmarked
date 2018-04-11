import React, { Component } from "react";
import BookEntryResults from "../BookEntryResults/bookentryresults";
import Navbar from "../../Navbar/navbar";
import "./bookentry.css"

const axios = require("axios");

class BookEntryForm extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    startReadDate: "",
    endReadDate: "", 
    books: [],
  };

  showBookResults = results => {
    if (results.length) {
      return <BookEntryResults books={results} auth={this.props.auth} />
    }else {
      return (
        <div></div>
      )
    }
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    console.log(event); 
    let {name, value} = event.target;
       
    this.setState({
      [name]: value
     
    }); 
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    console.log("add book button clicked");
    console.log("book title: " + this.state.title);
    console.log("start date:  " + this.state.startReadDate);
    console.log("stop date: " + this.state.endReadDate);
    
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.title + "&key=AIzaSyAxLkiTW6AZ8LH1QlM1cPcLM8gMqndqIhw")
    .then(response => {

        console.log(response.data.items);
           
       
        this.setState({
            books: response.data.items
          })
   

    })
    


    //call to google with user title 
     
    this.setState({
      title: "",
      startReadDate: "",
      endReadDate: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <Navbar />
        <h3>New Book Entry</h3>
        <form className="form" >
          <input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            type="text"
            placeholder="Book Title"
          />
          <input
            value={this.state.startReadDate}
            name="startReadDate"
            onChange={this.handleInputChange}
            type="date"
            placeholder="Start Date"
          />
          <input
            value={this.state.endReadDate}
            name="endReadDate"
            onChange={this.handleInputChange}
            type="date"
            placeholder="End Date"
          />
          <button className="btn btn-primary btn-md" id="searchbtn" onClick={this.handleFormSubmit}>Submit</button>
        </form>
        
        
          <div className="bookresults"></div>
          {this.showBookResults(this.state.books)}
                
      </div>
    );
  }
}

export default BookEntryForm;