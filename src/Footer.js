// create a class-based component
// required pieces: import, class, and export
import React from 'react';
import './Footer.css';

class Footer extends React.Component {

	render() {
		return (
			<footer>
				&copy; Laurel Perkins
			</footer>
		)
	}

};

// don't forget to import in App.js!
export default Footer;