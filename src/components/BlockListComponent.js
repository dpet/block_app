
import React, { Component } from 'react';
import Axios from "axios";

class BlockListComponent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      recent: [],
	    };
	 }

  	render(){
    	return(
    		<div>
    			<h1 className="title is-size-2">Recent Blocks</h1>

	    		<table className="table is-narrow is-bordered is-fullwidth" >
	    			<thead>
	    				<th>Height</th>
	    				<th>Size</th>
	    				<th>Time</th>
	    				<th>TRansactions</th>
	    			</thead>
	    			<tbody>
	    				{this.generateJsx()}
	    			</tbody>
	    		</table>
    		</div>
    	)
	}

	componentDidMount(){
		this.getRecentBlocks()
	}

	generateJsx(){
		let { recent } = this.state
		let jsx = []

		recent.forEach((block)=>{
			jsx.push(
	            <tr key={block.id}>
	                <td>{block.height}</td>
	                <td>{block.size}</td>
	                <td>{block.timestamp}</td>
	                <td>{block.tx_count}</td>
	            </tr>
	        )
		})

		return jsx
	}

	getRecentBlocks(){
	    let {data_url} = this.props;

	    Axios.get(data_url+'blocks')
	    .then(response => {
	    	console.log(response.data)
	    	this.setState({recent: response.data})
	    })
	    .catch(e => {
	      console.log(e);
	    });
	 }
}

export default BlockListComponent;