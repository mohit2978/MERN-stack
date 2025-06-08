import React from "react";

class UserClass extends React.Component {
        constructor(props) {
            super(props);
            console.log(props)
        }

        render() {

            const {name,location}=this.props;
            return (
                <div className="UserCardClass">
                    <h3>Name {name}</h3>
                    <h3>Location:{location}</h3>
                </div>
            )
        }
 }

 export default UserClass;