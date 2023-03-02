import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {

	render() {
		return (
			<Modal className='modal'
				show={this.props.showModal}
				onHide={this.props.handleCloseModal}
			>
				<Modal.Header className='header'>
					<Modal.Title>{this.props.beastName}</Modal.Title>
				</Modal.Header>
				<Modal.Body className='body'>
					<img src={this.props.beastImg} alt='' />
					{this.props.beastDescription}
				</Modal.Body>
			</Modal>)
	}
};

export default SelectedBeast;