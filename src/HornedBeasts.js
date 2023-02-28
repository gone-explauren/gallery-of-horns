import React from 'react';
import './HornedBeasts.css';

class HornedBeasts extends React.Component {
	render () {
		console.log(this.props);
		return (
			<article>
			{/* "title" is passed down from parent component Main */}
			<h2>{this.props.title}</h2>
			<img src= {this.props.image_url} alt={this.props.title}></img>
			<p>{this.props.description}</p>
			</article>
		);
	}
};

export default HornedBeasts;