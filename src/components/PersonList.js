import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  //
  // LIFECYCLE Hook ------
  //
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      this.setState({ persons: res.data });
    });
  }
  // LIFECYCLE Hook ------
  //
  //
  render() {
    return (
      // this will check inside the array
      //   always give a key id when doing this, otherwise it will send an error
      <ul>
        {this.persons.map((person) => (
          <li key={person.id}> {person.name} </li>
        ))}
      </ul>
    );
  }

  //   end -------------
}
