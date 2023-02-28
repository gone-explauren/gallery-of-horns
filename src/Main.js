// create a class-based component
// required pieces: import, class, and export
import React from 'react';
import HornedBeasts from './HornedBeasts';

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