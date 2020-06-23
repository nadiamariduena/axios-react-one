import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
  state = {
    name: "",
  };

  // ------- this comes after creating the form on the bottom
  handleChange = (event) => {
    this.setState({ name: event.target.value });
    // ANY value typed inside the text box : event.target.value will be added to the state block in line 5/6
  };
  // -------

  //
  // handleSubmit ------
  handleSubmit = (event) => {
    //   stop the browser from reloading the page
    event.preventDefault();

    // create a new user/ ths will make a new object
    const user = {
      name: this.state.name,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  // handleSubmit ------
  //
  //
  render() {
    return (
      // FORM ----
      //   the line below is connected  to line 18
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }

  //   end -------------
}
