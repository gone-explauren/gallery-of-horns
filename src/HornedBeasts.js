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


	render() {
		console.log(this.props);
		return (
			<Card style={{ width: '18rem' }} className='p-1 h-100'>
				<article className='hornedBeasts'>
					<Card.Header>
						<h2>{this.props.title}</h2>
						{/* Ternary */}
						<div>{this.state.liked ? '😍😍😍' : ''}</div>
					</Card.Header>
					<Card.Body>
						<div className='hearts'>
						{/* "title" is passed down from parent component Main */}
						<p>{this.state.likes} &hearts;'s</p>
						<p onClick={this.handleLikes}>💗</p>
						</div>
						<Card.Img
							src={this.props.image_url}
							alt={this.props.title}
						/>
						<p>{this.props.description}</p>
					</Card.Body>
				</article>
			</Card >
		);
	};
}

export default HornedBeasts;