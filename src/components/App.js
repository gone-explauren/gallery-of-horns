// import logo from './logo.svg';
// import './App.css';

// // React functional component (will learn in Code-401)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// // commented out to write the code myself as a class-based component...

// // React class component
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'
// // Modal moved to SelectedBeast component
// import Modal from 'react-bootstrap/Modal'
import BeastForm from'./BeastForm'
import data from '../data.json';
import './App.css';

class App extends React.Component {
  // send as props to header where the hearts will show up, but also to main, which ha access to HornedBeasts where the click event happens
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      beastName: '',
      beastImg: '',
      beastDescription: '',
      data: data,
      showModal: false
    }
  }

  // pass the method addHearts down to HornedBeasts component, where the click event is happening
  addHearts = () => {
    // this is the only way to update the value of state, you must use this method
    this.setState({
      // keep adding hearts as this method is evoked (ie. each time an image is liked, based on the onClick added below)
      hearts: this.state.hearts + '😍',
    })
  }

  // Modal moved to SelectedBeasts component, but these methods live in App.js to be passed down to all of App.js's children components (handleOpenModal needs to be used in HornedBeasts.js and handleCloseModal needs to be used in SelectedBeast.js)
  handleOpenModal = (title, image_url, description) => {
    this.setState({
      beastName: title,
      beastImg: image_url,
      beastDescription: description,
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      beastName: ''
    })
  }

  render() {
    return (
      // fractional elements to render sibling jsx (html) tags
      <>
        {/* syntax to use the React Component created in Header.js */}
        <Header hearts={this.state.hearts}/>
        <Main 
          /* These are the methods I want to pass down to Main */
          addHearts={this.addHearts} 
          handleOpenModal={this.handleOpenModal} 
          data={this.state.data}
        />
        <BeastForm
          data={this.data}
        />
        <SelectedBeast 
          /* Pass these methods down to SelectedBeast.js */
          handleCloseModal={this.handleCloseModal}
          beastName={this.state.beastName}
          beastImg={this.state.beastImg}
          beastDescription={this.state.beastDescription}
          showModal={this.state.showModal}
        />
        <Footer />
        {/* 
        // // Modal moved to SelectedBeasts component
        
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header>
            <Modal.Title>{this.state.beastName}</Modal.Title>
          </Modal.Header>
        </Modal> 
        
        */}
      </>)
  }

};

export default App;

// // npm run start in terminal to view React in browser
// // localhost:3000

// // Deploying a React page:
// // GitHub pages does not work with React, so we use Netlify and import from our GitHub repo.
// // Deployed pages on Netlify will automatically update when ACP to GitHub