import React from 'react'

class HornedBeasts extends React.Component {
	render () {
		return (
			<article>
			<h1>HornedBeasts</h1>
			{/* "name" is passed down from parent component Main */}
			<p>{this.props.name}</p>
			</article>
		);
	}
};

export default HornedBeasts;