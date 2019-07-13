
import React, { Component } from 'react';
import moment from 'moment';

function BlockComponent(props) {

	let {block} = props

	if (block){
		return( 
			<div>   		
				{block.height}
			</div>
		)
	}

	return null	
}

export default BlockComponent;