import React from 'react';
import Navbar from "../Navbar/navbar";
import axios from 'axios';
import "./stats.css";



class Stats extends React.Component {
//     // Setting the initial state of the Counter component
      state = {
        bookCount: "",
        pages: ""
        };

     statButton = event => {
         console.log("get stat button clicked");

        axios.get("/api/stats")
          
          .then((response) => {
            console.log(response.data);

            this.setState({
                bookCount: response.data
              });
            
          })
          .catch((error) => {
            console.log(error);
          }); 
   
     };
     
     statPage = event => {
      console.log("get pageCount button clicked");

     axios.get("/api/pages")
       
       .then((response) => {
         console.log(response);

         this.setState({
             pages: response.data
           });
         
       })
       .catch((error) => {
         console.log(error);
       }); 

  };
  
    
    render() 
    {
      return (
        <div>
             <Navbar handleLogout/>


            <div className="container">
              <div className="row">

                  <div className ="col-md-6">
                  <div className="photo"></div>
                  </div>

                  <div className ="col-md-3">
                    <button className="btn btn-primary btn-md" id="bttn" onClick={this.statButton}>Show Book Stats</button>
                    <div>Total Books Read: {this.state.bookCount}</div>
                  </div>

                  
                  <div className="col-md-3">
                    <button className="btn btn-primary btn-md" id="bttn" onClick={this.statPage}>Show Total Pages</button>
                    <div>Total Pages Read: {this.state.pages}</div>
                  </div>
              </div>
              </div>
            

                <hr></hr>

                

              

         </div>
      );
    }
  }
  
  export default Stats;
