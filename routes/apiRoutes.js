

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
    
    var NewBook = require("../models/bookentry");
    
        
    router.post("/submit", function(req,res){
			NewBook.create(req.body, function (error, saved) {
            // Log any errors
            if (error) {
                console.log(error);
            } else {
                
                res.send(saved);
            }
        });
        
    });   
    
    router.get("/allbooks", function(req,res){
        console.log("get book route working")
        console.log(req.body);
                
        NewBook.find({})
         .then(function (dbBookData) {
            //console.log(dbBookData);
            res.json(dbBookData);

          })
          .catch(function (error) {
            console.log(error);
          });
    
    });

    router.get("/stats", function(req,res){
        console.log("stats route working")
                 
            
            //query 1 find all books + send total books to front end
            NewBook.find({}).count()
              .then(function (bookCount) {
                  
                console.log(bookCount);
               
                res.json(bookCount);
               })              
       
                .catch(function (error) {
                 console.log(error);
               });
               
    });

    router.get("/pages", function(req,res){
        console.log("pages route working")
        // NewBook.aggregate({
        //     $group: {
        //         _id: '324opqiouoihje',
        //         pages: { $sum: '$pages' }
        //     }
        //  }, {
        //     $project: {
        //         _id: 0,
        //         pages: '$pages'
        //     }
        // })  
        // .then(function (pageCount) {
        //     console.log(pageCount);
        //     res.json(pageCount);

        //   })  
        
    
    });

    router.get("/delete", function(req,res){
        console.log("delete route working")
        
            
        //NewBook.remove( { _id : req.id } ) 
      
    });

return router;
};