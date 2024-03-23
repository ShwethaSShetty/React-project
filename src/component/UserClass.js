import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"Dummy",
        location: "Default",
        avatar_url: "http://dummy-photo.com"
      }
    };
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/ShwethaSShetty")
    const json = await data.json;
    this.setState({
      userInfo:json
    })
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <UserContext.Consumer>
          {({loggedInUser})=><h3>loggedIn User: {loggedInUser}</h3>}
        </UserContext.Consumer>
        <h3>Location: {location}</h3>
        <h4>Contact: abc@gmail.com</h4>
      </div> 
    );
  }
}

export default UserClass;
