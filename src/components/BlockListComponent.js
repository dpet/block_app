
import React, { Component } from 'react';
import Axios from "axios";

class BlockListComponent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      recentBlocks: [],
	    };
	 }

  	render(){
    	return(
    		<div>sup</div>
    	)
	}

	componentDidMount(){

	}

	getRecentBlocks(){
	    let {data_url} = this.props;

	    Axios.get(data_url)
	    .then(response => {
	    	console.log(response)
	    	this.setState({recentBlocks: response.data})
	    })
	    .catch(e => {
	      console.log(e);
	    });
	 }
}

export default BlockListComponent;