// create a class-based component
// required pieces: import, class, and export
import React from 'react';
import data from '../data.json';
import HornedBeasts from './HornedBeasts';
import './Main.css';

class Main extends React.Component {

	render() {
		// console.log(data);
		let beastsArr = [];
		data.forEach((beast, idx) => {
			// console.log(beast);
			beastsArr.push(
				<HornedBeasts
					title={beast.title}
					// accessing addHearts method from App.js
					addHearts={this.props.addHearts}
					// accessing handleOpenModal method from App.js
					handleOpenModal={this.props.handleOpenModal}
					image_url={beast.image_url}
					description={beast.description}
					key={idx}
				/>
			);
		})
		return (
			<main>
				{/*  
				// Main is the parent of HornedBeasts. Data is passed down from here into the HornedBeasts component.
				<HornedBeasts title = "Unicorn" imgUrl = "img/unicorn.jpg" description = "A realistic drawing of a the mythical horned equine, the unicorn."/>
				// Assets must live inside the public or src file to be recognized by React.
				// React can also take imgages straight from the web source. 
				<HornedBeasts title = "Irish Elk" imgUrl = "img/irish-elk.jpg" description = "An artist's rendition of the extinct Ice Age megafauna, the Irish Elk."/> 
				*/}
				{beastsArr}
			</main>
		)
	}

};

// don't forget to import in App.js!
export default Main;

