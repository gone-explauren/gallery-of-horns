// create a class-based component
// required pieces: import, class, and export
import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';

class Main extends React.Component {

	render() {
		return (
			<main>
				{/* Main is the parent of HornedBeasts. Data is passed down from here into the HornedBeasts component.*/}
        <HornedBeasts title = "Unicorn" imgUrl = "img/unicorn.jpg" description = "A realistic drawing of a the mythical horned equine, the unicorn."/>
				{/* Assets must live inside the public or src file to be recognized by React.
				React can also take imgages straight from the web source. */}
				<HornedBeasts title = "Irish Elk" imgUrl = "img/irish-elk.jpg" description = "An artist's rendition of the extinct Ice Age megafauna, the Irish Elk."/>
      </main>
		)
	}

};

// don't forget to import in App.js!
export default Main;



// // this would be on the App.js page
// Import data from 'data.json';

// // this is coming from the component js "People" which, for this lab, is HornedBeasts
// Import Person from './Person';

// class Main extends React.Component {
// 	render() {
// 		let people = [];
// // there is a counter built into forEach(), refering to the current index of the array being processed
// 		this.props.data.forEach((peep, idx) => {
//	people.push(
// 			<Person
// 			name={peep.name}
// 			imgUrl={peep.imgUrl}
// // assign each Person a unique key property
//			key={idx}
// 			/>
//		 );
// 		})
// 		return (
// 			<main>
// 					{people}
//       </main>
// 		)
// 	}
// };

// export default Main;