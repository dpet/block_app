
import React, { Component } from 'react';
import Axios from "axios";
import moment from 'moment';

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
	    				<tr>
		    				<th>Height</th>
		    				<th>Size</th>
		    				<th>Time</th>
		    				<th>Transactions</th>
	    				</tr>
	    			</thead>
	    			<tbody>
	    				{this.rowsJsx()}
	    			</tbody>
	    		</table>
    		</div>
    	)
	}

	componentDidMount(){
		this.getRecentBlocks()
	}

	rowsJsx(){
		let { recent } = this.state
		let jsx = []

		recent.forEach((block)=>{
			let ts = moment.unix(block.timestamp);
			let time = ts.format('h:mm a')

			jsx.push(
	            <tr key={block.id}>
	                <td><a href="">{block.height}</a></td>
	                <td>{block.size}</td>
	                <td>{time}</td>
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