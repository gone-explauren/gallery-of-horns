// create a class-based component
// required pieces: import, class, and export
import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

	render() {
		return (
			<main>
				{/* Main is the parent of HornedBeasts */}
        <HornedBeasts name = "Unicorn"/>
				<HornedBeasts name = "Antlers"/>
      </main>
		)
	}

};

// don't forget to import in App.js!
export default Main;