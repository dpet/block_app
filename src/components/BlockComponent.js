
import React, { Component } from 'react';
import moment from 'moment';

function BlockComponent(props) {

	let {block} = props
	let transactions

	if (block){

		transactions = block.transactions.map((tx)=>{
			return <tr key={tx.txid}>
				<td>{tx.fee}</td>
				<td>{tx.size}</td>
				<td>{tx.weight}</td>
			</tr>
		})

		return( 
			<div>
				<h1 className="title is-size-2">Block Information: {block.height}</h1>

				Size: {block.size}<br />
				Day: {moment.unix(block.timestamp).format('dddd, MMMM Do, YYYY')}<br />
				Time: {moment.unix(block.timestamp).format('h:mm a')}<br />
				Transactions: {block.tx_count}

				<br /><br />
				<h2 className="title is-size-4">Transactions (Last 25)</h2>

				<table className="table is-narrow is-bordered is-fullwidth" >
	    			<thead>
	    				<tr>
		    				<th>Fee</th>
		    				<th>Size</th>
		    				<th>Weight</th>
	    				</tr>
	    			</thead>
	    			<tbody>
	    				{transactions}
	    			</tbody>
	    		</table>

				

				<br /><br />
			</div>
		)
	}

	return null	
}

export default BlockComponent;