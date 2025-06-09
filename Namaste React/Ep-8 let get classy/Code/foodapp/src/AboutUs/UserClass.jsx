import React from "react";

class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count:1,
                count2:2,
            }
        }

        render() {

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