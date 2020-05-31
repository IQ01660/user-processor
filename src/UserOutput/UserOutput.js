import React from 'react';
import {Component} from 'react';

const userOutput = (props) => {
    const userNameStyle = {
        "width": "30%",
        "margin": '5px auto',
        'background-color': 'purple',
        'color': 'white',
        'font-size': "20px"
    }

	return (
		<div>
			<p style={userNameStyle}>{props.username}</p>
			<p>{props.children}</p>
		</div>
	);
};

export default userOutput;
