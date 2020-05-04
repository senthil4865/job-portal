// MODULES
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import CandidateList from './components/candidate/CandidateList';
import CandidateResponse from './components/candidate/CandidateResponse';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';


const App =()=> {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
    return (
     <Provider store={store}>
     <Router>
       <div>
         <Navbar />
         <Route path='/'  component={CandidateList} exact />
         <Route path='/candidate/:id' component={CandidateResponse} />
       </div>
     </Router>
     </Provider>
    )
}

export default App;
