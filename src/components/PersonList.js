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
    //tutorial api names:    https://jsonplaceholder.typicode.com/users
    //assigment api countries :    https://restcountries.eu/rest/v2/all
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res.data);

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
      //    {this.state.persons && if is not empty  : render, this line is linked to line6 : persons: [],
      <ul>
        {this.state.persons &&
          this.state.persons.map((person) => (
            <li key={person.id}> {person.name} </li>
          ))}
      </ul>
    );
  }

  //   end -------------
}
