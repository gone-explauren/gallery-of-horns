import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeasts.css';



class HornedBeasts extends React.Component {
	constructor(props) {

		// super brings down all of the data from the previous component
		super(props);

		this.state = {
			likes: 0,
			liked: false
		}
	}


	handleLikes = () => {
		this.setState({
			likes: this.state.likes + 1,
			liked: true,
		})
	};


	// helper function combinging the two functions I want to happen onClick, since onClick can't call two seperate functions without this helper function
	handleLikeAndAddHearts = () => {
		this.props.addHearts();
		this.handleLikes();
	};

	handleClickOpenModal = () => {
		this.props.handleOpenModal(this.props.title);
	}

	render() {
		return (
			<Card style={{ width: '18rem' }}>
				<article className='hornedBeasts'>
					<div className='card-header'>
						<h2>{this.props.title}</h2>
						{/* Ternary: another one-liner way to write an if/else */}
						{/* Can be used with multiple else if statements, but I don't know how to do it and it's also a very muddy thing to do, so let's just not */}
						{/* this div will just populate the heart eyes emojis under the h2, and only when the beast is liked */}
						<div>{this.state.liked ? '😍😍😍' : ''}</div>
					</div>
					<Card.Body>
						<div className='hearts'>
							{/* "title" is passed down from parent component Main */}
							<p>{this.state.likes} &hearts;'s</p>
							{/* we need a helper function (Modal) to process two seperate functions onClick */}
							{/*, this.props.addHearts}*/}
							<p className='heartButton' onClick={this.handleLikeAndAddHearts}>💗</p>
						</div>
						<Card.Img
							src={this.props.image_url}
							alt={this.props.title}
							// when an image is clicked, it opens the Modal
							onClick={this.handleClickOpenModal}
							/>
						<p>{this.props.description}</p>
					</Card.Body>
				</article>
			</Card >
		);
	};
}

export default HornedBeasts;