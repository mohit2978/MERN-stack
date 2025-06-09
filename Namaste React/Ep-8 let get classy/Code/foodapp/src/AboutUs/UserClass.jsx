import React from "react";
import {Component} from 'react';

class UserClass extends Component{
        constructor(props) {
            super(props);
            this.state = {
                count:1,
                count2:2,
            }
            console.log("this is the UserClass Component constructor method"+this.props.name);
        }

        componentDidMount(){
            console.log("componentDidMount of UserClass Component"+this.props.name);
        }

        render() {
            console.log("this is the UserClass Component render method"+this.props.name);
            const {name,location}=this.props;
            const{ count,count2 } = this.state;
            return (
                <div className="UserCardClass">
                    <h3>Name {name}</h3>
                    <h3>Location:{location}</h3>
                    <h4>Count :{count} count 2 : {count2}</h4>
                    <button onClick={()=>{
                            this.setState({
                              count:this.state.count+1,
                                count2:this.state.count2+2,
                    });
                    }}>Click here</button>
                </div>
            )
        }
 }

 export default UserClass;