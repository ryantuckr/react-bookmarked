import React, { Component } from "react";
import "./bookentryform.css";
const axios = require("axios");

class BookEntryForm extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    startReadDate: "",
    endReadDate: "", 
    books: [],
  };

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

          console.log("test: " + this.state.books)
          
             
        //2. display the thumbnails in the book entry component div below
       
        //map over the books array.


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
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        
        <div className="bookresults">{this.state.books}</div>
        
      </div>
    );
  }
}

export default BookEntryForm;