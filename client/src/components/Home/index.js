import React from 'react';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../Jumbotron/jumbotron';





const Home = (props) =>{
	return (
		<div>
			<Navbar handleLogout = {props.handleLogout} auth = {props.auth} />
			<Jumbotron />
			
		</div>
	);
}

export default Home;