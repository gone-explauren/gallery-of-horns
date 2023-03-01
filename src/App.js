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

// // commented out to write the code myself...

// // React class component
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from 'react-bootstrap/Modal'
import './App.css';

class App extends React.Component {
  // send as props to header where the hearts will show up, but also to main, which ha access to HornedBeasts where the click event happens
  constructor(props) {
    super(props);
    this.state = {
      hearts: ''
    }
  }

  // pass the method addHearts down to HornedBeasts component, where the click event is happening
  addHearts = () => {
    // this is the only way to update the value of state, you must use this method
    this.setState({
      // keep adding hearts as this method is evoked (ie. each time an image is liked, based on the onClick added below)
      hearts: this.state.hearts + '😍',
      showModal: false,
      beastName: ''
    })
  }

  handleOpenModal = (title) => {
    this.setState({
      showModal: true,
      beastName: title
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      // fractional elements to render sibling jsx (html) tags
      <>
        {/* syntax to use the React Component created in Header.js */}
        <Header hearts={this.state.hearts} />
        <Main 
          /* These are the methods I want to pass down to Main */
          addHearts={this.addHearts} 
          handleOpenModal={this.handleOpenModal} 
        />
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header>
            <Modal.Title>{this.state.beastName}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>)
  }

};

export default App;

// // npm run start in terminal to view React in browser
// // localhost:3000

// // Deploying a React page:
// // GitHub pages does not work with React, so we use Netlify and import from our GitHub repo.
// // Deployed pages on Netlify will automatically update when ACP to GitHub