// create a class-based component
// required pieces: import, class, and export
import React from 'react';

class Header extends React.Component {

	render() {
		return (
			<header>
        <h1>Horned Beasts</h1>
      </header>
		)
	}

};

// don't forget to import in App.js!
export default Header;