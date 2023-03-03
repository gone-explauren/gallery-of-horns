import React from 'react';

// this imports all of bootcamp, then extracts just the form and the button
// this is less ideal overall, but good in certain circumstances
import { ListGroup, Form, Button } from 'react-bootstrap';
import './BeastForm.css';

class BeastForm extends React.Component {

	render() {

		let selectedNumberHorns = this.props.filterData.map((beast, idx) => {
			// console.log(beast);
			<ListGroup.Item key={idx}>
				{beast}
			</ListGroup.Item>;
		})

		return (
			<>
				<Form onSubmit={this.props.handleSubmit}>

					<div className='form-style'>
						<Form.Label>
							<h3 className='form-header'>Filter Beasts by Number of Horns</h3>
						</Form.Label>

						<div className='select-and-submit'>
							<Form.Control as="select" onChange={this.props.handleSelectionOnChange}>
								<option value='all'>All</option>
								<option value='one'>One</option>
								<option value='two'>Two</option>
								<option value='three'>Three</option>
								<option value='more'>More</option>
							</Form.Control>

							<Button type="submit">Submit</Button>
						</div>
					</div>

				</Form>

				<ListGroup>
					{selectedNumberHorns}
				</ListGroup>
			</>
		)
	}
};

export default BeastForm;