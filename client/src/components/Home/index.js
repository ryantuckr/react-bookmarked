import React from 'react';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../Jumbotron/jumbotron';
import BookEntryForm from '../BookEntry/BookEntryForm/bookentryform';
import Stats from "../Stats/stats";
import {Route} from 'react-router-dom';
import AllBooks from "../AllBooks/allbooks"



const Home = (props) =>{
	return (
		<div>
			<Navbar />
			<Jumbotron />
			
		</div>
	);
}

export default Home;