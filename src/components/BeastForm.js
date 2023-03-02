import React from 'react';

// this imports all of bootcamp, then extracts just the form and the button
// this is less ideal overall, but good in certain circumstances
import { ListGroup, Form, Button } from 'react-bootstrap';
import './BeastForm.css';

class BeastForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			howToSort: '',
			// this will display the original data, not filtered data, by default
			filterData: this.props.data
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();

		// // with the handleSelectionOnChange function, this code becomes unneccessary
		// // setState takes more time to update and cannot be used instantly
		// let selected = event.target.selected.value;
		// this.setState({
		// 	howToSort: selected
		// })

		if (this.state.howToSortSelected === 'All') {
			this.setState({ filterData: this.props.data })

		} else if (this.state.howToSortSelected === 'One') {
			// displays only data that equals 1
			let newData = this.props.data.filter(num => num === 1);
			this.setState({ filterData: newData })

		} else if (this.state.howToSortSelected === 'Two') {
			let newData = this.props.data.filter(num => num === 2);
			this.setState({ filterData: newData })

		} else if (this.state.howToSortSelected === 'Three') {
			let newData = this.props.data.filter(num => num === 3);
			this.setState({ filterData: newData })

		} else {
			let newData = this.props.data.filter(num => num !== 1 && num !== 2 && num !== 3);
			this.setState({ filterData: newData })

		}
	}

	handleSelectionOnChange = (event) => {
		// no prevent default because this is not a submit event
		// this updates the state more instantaneously than it would on it's own, so I can use this data right away
		this.setState({
			howToSortSelected: event.target.value
		})
	}

	render() {
		let selectedNumberHorns = this.state.filterData.map((horns, idx) => 
		<ListGroup.Item key={idx}>
			{horns}
		</ListGroup.Item>)

		return (
			<>
				<Form onSubmit={this.handleSubmit}>

					<Form.Label onChange={this.handleSelectionOnChange}>
						<Form.Control type="number" />
					</Form.Label>

					<Form.Label>
						<Form.Select name="howToSortSelected">
							<option value='all'>All</option>
							<option value='one'>One</option>
							<option value='two'>Two</option>
							<option value='three'>Three</option>
							<option value='more'>More</option>
						</Form.Select>
					</Form.Label>

					<Button type="submit">Submit</Button>
				</Form>

				<ListGroup>
					{selectedNumberHorns}
				</ListGroup>
			</>
		)
	}
};

export default BeastForm;