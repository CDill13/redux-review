import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson } from './reducer';
import People from './People';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      catchPhrase: '',
    };
  }

  handleChange(type, value) {
    this.setState({
      [type]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => {
            this.handleChange(e.target.name, e.target.value);
          }}
        />
        <label>Catchphrase</label>
        <input
          type="text"
          name="catchPhrase"
          value={this.state.catchPhrase}
          onChange={e => {
            this.handleChange(e.target.name, e.target.value);
          }}
        />
        <button
          onClick={() => {
            this.props.addPerson(this.state);
          }}
        >
          Add person
        </button>
        <People />
      </div>
    );
  }
}

export default connect(state => state, { addPerson })(App);
