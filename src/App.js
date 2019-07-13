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

            <div className="columns">
              <div className="column is-half">
                <BlockListComponent
                  data_url={data_url}
                  blockSelected={this.blockSelected}>
                </BlockListComponent>
              </div>

              <div className="column is-half">
                <BlockComponent
                  block={block}>
                </BlockComponent>
              </div>
            </div>
          
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
        this.getBlockTransactions(response.data, tx)        
      })
      .catch(e => {
        console.log(e)
        this.setState({block: null})
      });
   }

   // /block/:hash/txs[/:start_index]
   getBlockTransactions(block, tx){
      let { data_url } = this.state;

      Axios.get(data_url+'block/'+tx+'/txs')
      .then(response => {
        block['transactions'] = response.data
        this.setState({block: block})
      })
      .catch(e => {
        console.log(e)
        this.setState({block: null})
      });
   }
}

export default App; 
