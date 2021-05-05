import './App.css';
import React from 'react';
import contactsFromJSON from './contacts.json';
class App extends React.Component {
  state = {
    contacts: contactsFromJSON.slice(0, 5)
  };
  addRandomContact = () => {
    const newContact = contactsFromJSON[Math.floor(Math.random() * contactsFromJSON.length)];
    this.setState({
      contacts: this.state.contacts.concat(newContact),
    });
  };
  sortByName = () => {
    const sortedName = this.state.contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: sortedName
    })
  }
  sortByPopularity = () => {
    const sortedPop = this.state.contacts.sort((a, b) => {
     return a.popularity - b.popularity;
   });
   this.setState({
     contacts: sortedPop
   })
 }
 deleteContact = (id) => {
  this.setState({
    contacts: this.state.contacts.filter((contact) => contact.id !== id),
  });
};
  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        {this.state.contacts.map((contact, index) => {
          return (
            <div key={index}>
              <h2>Name:{contact.name}</h2>
              <img src={contact.pictureUrl} width="200px" />
              <h2>Poupularity:{contact.popularity}</h2>
              <button onClick={() => this.deleteContact(contact.id)}>Delete</button>

            </div>
          )


        })};

      </div>
    );
  }
}
export default App;


