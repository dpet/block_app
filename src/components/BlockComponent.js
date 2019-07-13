
import React, { Component } from 'react';
import moment from 'moment';

function BlockComponent(props) {

	let {block} = props

	if (block){
		return( 
			<div>
				<h1 className="title is-size-2">Block Information: {block.height}</h1>

				Size: {block.size}<br />
				Day: {moment.unix(block.timestamp).format('dddd, MMMM Do, YYYY')}<br />
				Time: {moment.unix(block.timestamp).format('h:mm a')}<br />
				Transactions: {block.tx_count}

				<br /><br />
			</div>
		)
	}

	return null	
}

export default BlockComponent;