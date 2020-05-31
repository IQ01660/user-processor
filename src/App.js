import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        userPosts: [
            {userName: "gabiyev_i", post: "My first post"},
            {userName: "javid_ac23", post: "My third post"}
        ]
    };
    
    updateUserName = (event) => {
        this.setState({
            userPosts: [
                {userName: "gabiyev_i", post: "My first post"},
                {userName: event.target.value, post: "My third post"}
            ]
        });
    }

    render() {

		return (
			<div className="App">

				<UserOutput username={this.state.userPosts[0].userName}
                >{this.state.userPosts[0].post}
                </UserOutput>

				<UserOutput username={this.state.userPosts[1].userName}
                >{this.state.userPosts[1].post}
                </UserOutput>

                <UserInput updateUser={this.updateUserName} value={this.state.userPosts[1].userName}/>
			</div>
		);
	}
}

export default App;
