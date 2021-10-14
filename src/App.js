import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Error from './pages/Error';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <Route>
        <NavBar />
      </Route>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
