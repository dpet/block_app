
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
		this.getRecentBlocks()
	}

	generateJsx(){

		let jsx = []

		jsx.push(
            <tr>
                <td>hi</td>
            </tr>
        )

		jsx = <table className="table is-narrow is-bordered is-fullwidth" ><tbody>{jsx}</tbody></table>

		return jsx
	}

	getRecentBlocks(){
	    let {data_url} = this.props;

	    Axios.get(data_url+'blocks')
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