import React from 'react';

const Foo_1 = (props) => {
	return (
		<div> 
		<p>I am flying on {props.plane} and I am { props.children}</p>
	<input type="text" onChange={props.changed}  /> type to change first line  {/* value={props.plane}, NOT RECOMMENDED JUST EX TO SHOW INITIAL VALUE */}
	</div>
	); //children = content inside Foo_1 obj, 
}

export default Foo_1;