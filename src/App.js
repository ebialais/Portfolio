import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Accueil from './Page/Accueil/Accueil';
import Infos from './Page/Infos/Infos';
import InfosWork from './Page/InfosWork/InfosWork';
import Work from './Page/Work/work';
import Header from './Component/Header/header';

class App extends Component{
  render (){
    return (
      <div>
        <Header />
        <Router>
        {/* <Router basename='/PiloteMedia-Geolia'> */}
          <Switch>
            <Route path="/" exact render={()=>(<Accueil 
                                                  // datas={this.state.datas} 
                                                  // shuffle={this.shuffle} 
                                                />)} />
            {/* <Route path="/ListPage" exact render={()=>(<ListPage />)} />
            <Route path="/Perso" exact render={()=>(<PersoPage />)} /> */}
            <Route path="/Infos/:id" component={Infos} />
            <Route path="/InfosWork/:id" component={InfosWork} />
            <Route path="/Work" component={Work} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
