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
import BeastForm from './BeastForm'
import data from '../data.json';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      beastName: '',
      beastImg: '',
      beastDescription: '',
      data: data,
      filterData: data,
      howToSortSelected: '',
      showModal: false
    }
  }

  // method to pass down to HornedBeasts component, where the click event is happening
  addHearts = () => {
    // this is the only way to update the value of state, you must use this method
    this.setState({
      // keep adding hearts as this method is evoked (ie. each time an image is liked, based on the onClick added below)
      hearts: this.state.hearts + '😍',
    })
  }


  // methods to be passed down to BeastForm
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.howToSortSelected);

    if (this.state.howToSortSelected === 'all') {
      this.setState({ filterData: data })

    } else if (this.state.howToSortSelected === 'one') {
      // displays only data that equals 1
      let newData = data.filter(num => {
        // console.log(num.horns);
        return num.horns === 1
      });
      this.setState({ filterData: newData })

    } else if (this.state.howToSortSelected === 'two') {
      let newData = data.filter(num => num.horns === 2);
      this.setState({ filterData: newData })

    } else if (this.state.howToSortSelected === 'three') {
      let newData = data.filter(num => num.horns === 3);
      this.setState({ filterData: newData })

    } else {
      let newData = data.filter(num => num.horns !== 1 && num.horns !== 2 && num.horns !== 3);
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


  // methods to be passed down to SelectedBeasts
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
    // console.log(this.state.howToSortSelected)
    // why isnt this working
    return (
      // fractional elements to render sibling jsx (html) tags
      <>

        <Header hearts={this.state.hearts} />

        <BeastForm
          // Pass these methods down to BeastForm 
          data={this.state.data}
          filterData={this.state.filterData}
          howToSort={this.state.howToSort}
          // do I want to pass these to BeastForm or to HornedBeasts to render them? 
          handleSubmit={this.handleSubmit}
          handleSelectionOnChange={this.handleSelectionOnChange}
        />

        <Main
          // These are the methods I want to pass down to Main 
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          filterData={this.state.filterData}
        />

        <SelectedBeast
          // Pass these methods down to SelectedBeast.js 
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