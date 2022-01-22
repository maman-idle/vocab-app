import React from 'react';

//components
import Header from './components/Header';
/* import logo from './images/write.png'; */

//styles
import {GlobalStyle} from './globalStyling';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt='logo'/> */}
      <Header/>      
      <h1> Welcome to Vocab the App</h1>

      {/*Using global style*/}
      <GlobalStyle />
    </div>
  );
}

export default App;
