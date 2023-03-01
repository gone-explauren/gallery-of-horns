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
import './App.css';

class App extends React.Component {

  render() {
    return (
      // fractional elements to render sibling jsx (html) tags
      <>
      {/* syntax to use the React Component created in Header.js */}
      <Header/>
      <Main/>
      <Footer/>
      </>)
  }

};

export default App;

// // npm run start in terminal to view React in browser
// // localhost:3000

// // Deploying a React page:
// // GitHub pages does not work with React, so we use Netlify and import from our GitHub repo.
// // Deployed pages on Netlify will automatically update when ACP to GitHub