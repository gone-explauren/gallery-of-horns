
// // Using State: data that belongs to a specific component, data that the component can change, data meant to change frequently and update automatically

// import React from 'react';

// class Person extends React.Component {
//	constructor(props) {

// // super brings down all o the data from the previous component
//	super(props);

//	this.state = {
//				waves: 0
//			}
//		}
// }

// handleWaves = () => {

// // Must use this.setState to update a value in State
// // When the user clicks on "Say Hello," update the value of this.state.waves
//	this.setState({

// // Cannot update State with ++ because it would automatically and immediately update State on it's own instead of on click.
//		waves: this.state.waves +1,
// 		})
// }

// class Person extends React.Component {
// 	render () {
// 		return (
// 			<article>
// 			<h2>{this.props.name}</h2>
// 			<p>{this.state.waves} greetings</p>
//			<p onClick={this.handleWaves}>Say Hello!</p>
// 			<img 
//				src= {this.props.imgUrl} 
//				alt={this.props.name}>
//			/>
// 			</article>
// 		);
// 	}
// };

// export default Person;