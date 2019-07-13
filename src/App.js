import React, { Component, Fragment } from "react";
import './App.css';

import Bulma from 'bulma';
import NavComponent from "./components/NavComponent.js";
import BlockListComponent from "./components/BlockListComponent.js";


class App extends Component{
  constructor(props) {
      super(props);

      this.state = {
        data_url: 'https://blockstream.info/api/'
      }
   }

  render(){
    return (
      <div>
        <NavComponent></NavComponent>

        <section className="section">
          <div className="container">

              <BlockListComponent
                data_url={this.state.data_url}>
              </BlockListComponent>
          
          </div>
        </section>

      </div>
    )
  }
}

export default App; 
