import React from 'react';
import axios from "axios";
import "./bookentry.css"


const BookEntryResults = (props) => {
    console.log("bookentryresults props:", props);
    
    this.bookSubmit = (book) => {
        // console.log(book)
            
        let bookEntry = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            pages: book.volumeInfo.pageCount,
            description: book.volumeInfo.description,
            thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
            userId: props.auth.userId
            

        }
        console.log("bookentryresults:", bookEntry);
            
        //post the book data object
        axios.post('/api/submit', bookEntry)
          .then(function (response) {
            console.log("DB save successful. Posted data below: ", response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        
        }

    return (
        <div className = 'card-body'>
                {props.books.map(book => {
                return (
                    <div key={book.id}>
                        <img  alt="" src={book.volumeInfo.imageLinks.smallThumbnail} /> 
                        <button className="btn btn-primary btn-md" id="savebtn" type="button" onClick={() => this.bookSubmit(book)}>Save</button>
                    </div> 
                )             
                })
        }
        </div>

    )

};

export default BookEntryResults;