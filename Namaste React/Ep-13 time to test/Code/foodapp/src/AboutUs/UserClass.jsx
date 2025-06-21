import React from "react";
import {Component} from 'react';

class UserClass extends Component{
        constructor(props) {
            super(props);

            this.state = {
                name:"",
                bio:"",
                followers:0,
                following:0,
            }
        }

        async componentDidMount(){
            const data=await fetch("https://api.github.com/users/mohit2978");
            const json= await data.json();
            this.setState({
                name: json.login,
                bio: json.bio,
                followers: json.followers,
                following:json.following,
            })
        }

        render() {
            return (
                <div className="UserCardClass">
                    <h3>Name {this.state.name}</h3>
                    <h3>Bio : {this.state.bio}</h3>
                    <h3>Followers : {this.state.followers}</h3>
                    <h3> Following : {this.state.following}</h3>
                </div>
            )
        }
 }

 export default UserClass;