import React, {Component} from 'react';
import './UserInput.css';

function userInput(props) {
	return (
		<div className="UserInput">
			<input onChange={props.updateUser} type="text" value={props.value}/>
		</div>
	);
}

export default userInput;
