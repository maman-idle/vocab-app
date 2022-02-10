import React from 'react';

//components
import Header from './components/Header';
import Login from './components/Login';
import ImageForm from './components/Form';

//styles
import {GlobalStyle} from './globalStyling';

//router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

/* use arrow func. for implicit return */
const App = () => (

  /* Wrap everything inside the Router */
      <Router>

        {/* Put all routes inside Routes tag */}
        <Routes>
          {/* Lay down the route inside the Route tag */}
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<ImageForm />} />
          <Route path='/' element={<Header />} />          
        </Routes>                      
        {/*Using global style*/}
        <GlobalStyle />
      </Router>    
  );

export default App;
