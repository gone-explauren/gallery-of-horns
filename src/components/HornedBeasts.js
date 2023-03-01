import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeasts.css';



class HornedBeasts extends React.Component {
	constructor(props) {

		// super brings down all o the data from the previous component
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

	handleHeaderClick = () => {
		this.props.handleOpenModal(this.props.data);
	};

	render() {
		console.log(this.props);
		return (
			<Card style={{ width: '18rem' }}>
				<article className='hornedBeasts'>
					<div className='card-header'>
						<h2 onClick={this.props.handleOpenModal}>{this.props.title}</h2>
						{/* Ternary */}
						<div>{this.state.liked ? '😍😍😍' : ''}</div>
					</div>
					<Card.Body>
						<div className='hearts'>
							{/* "title" is passed down from parent component Main */}
							<p>{this.state.likes} &hearts;'s</p>
							{/* we need a helper function (Modal) to process two seperate functions onClick */}
							{/*, this.props.addHearts}*/}
							<p onClick={this.handleLikes}>💗</p>
						</div>
						<Card.Img
							src={this.props.image_url}
							alt={this.props.title}
							// when an image is clicked, a heart will appear in the Header
							onClick={this.props.addHearts}
							// duplicate onClick not allowed
							/>
						<p>{this.props.description}</p>
					</Card.Body>
				</article>
			</Card >
		);
	};
}

export default HornedBeasts;