import React from 'react'

class HornedBeasts extends React.Component {
	render () {
		return (
			<article>
			{/* "title" is passed down from parent component Main */}
			<h2>{this.props.title}</h2>
			<img src= {this.props.imgUrl} alt={this.props.description}></img>
			<p>{this.props.description}</p>
			</article>
		);
	}
};

export default HornedBeasts;