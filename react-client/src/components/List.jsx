	import React from 'react';
import ListItem from './ListItem.jsx';
	let d = new Date("2018-04-20T09:30:51.01");

const List = (props) => (
<div className="embed-responsive-4by3" background="http://www.anasfim.com/p/2018/04/torn-notebook-paper-png-followershut-regarding-torn-notebook-paper-transparent-background.png" >
	   There are { props.items.length } things to do.
	   { props.items.map((item) =>{ return(
				<div key={item._id}>
				 		<ListItem item={item}/>
				 		<ul>
					 		<li>{item.todo}
					   		<p>Dead line: {item.deadLine}</p>
					   			<p>Time added: {
									d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
					   					}
					   			</p>
				   		</li>			   
				 		</ul>
				</div>    	
	    	)}
	    )
	}
</div>

)

export default List;