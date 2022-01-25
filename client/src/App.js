import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'
import Products from './components/Products'
import Test from './components/Test';

function App(){
  //return (<Products />);

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Test/>}/>   
      </Routes>
    </Router>

  );
}

export default App;


// return ( 
//   <Router>
//     <Switch>
//       <Route exact path="/menu" component={Menu}/>   
//       <Route exact path="/products" component={Products}/>     
//     </Switch>
//   </Router>
//   );