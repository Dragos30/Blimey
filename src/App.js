import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/BaseLayout/Header/Header';
import Navlink from './components/Navlink/Navlink';
import Main from './components/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header /> 
          <Switch>
            <Main path="/main" exact component={Main} />
            <Navlink path="/navlink" component={Navlink} /> 
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

