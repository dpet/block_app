import React, { Component, Fragment } from "react";
import './App.css';

import Bulma from 'bulma';
import Axios from "axios";

import NavComponent from "./components/NavComponent.js";
import BlockListComponent from "./components/BlockListComponent.js";
import BlockComponent from "./components/BlockComponent.js";


class App extends Component{
  constructor(props) {
      super(props);

      this.state = {
        data_url: 'https://blockstream.info/api/',        
        block: null,
      }

      this.blockSelected = this.blockSelected.bind(this)
   }

  render(){
    let { data_url, block } = this.state

    return (
      <div>
        <NavComponent></NavComponent>

        <section className="section">
          <div className="container">

            <BlockComponent
              block={block}>
            </BlockComponent>

            <BlockListComponent
              data_url={data_url}
              blockSelected={this.blockSelected}>
            </BlockListComponent>
          
          </div>
        </section>

      </div>
    )
  }

  blockSelected(height){
    this.getBlockTx(height)
  }


  //GET /block-height/:height

  getBlockTx(height){
      let { data_url } = this.state;

      Axios.get(data_url+'block-height/'+height)
      .then(response => {
        console.log(response.data)
        this.getBlock(response.data)
      })
      .catch(e => {
        console.log(e)
        this.setState({block: null})
      });
   }

   getBlock(tx){
      let { data_url } = this.state;

      Axios.get(data_url+'block/'+tx)
      .then(response => {
        console.log(response.data)
        this.setState({block: response.data})
      })
      .catch(e => {
        console.log(e)
        this.setState({block: null})
      });
   }
}

export default App; 
