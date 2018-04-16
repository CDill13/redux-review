import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePerson } from './reducer';

class People extends Component {
  render() {
    const peopleList = this.props.users.map(e => (
      <div
        key={e.name}
        onClick={() => {
          this.props.deletePerson(e);
        }}
      >
        <p>{e.name}</p>
        <p>{e.catchPhrase}</p>
      </div>
    ));
    return <div>{peopleList}</div>;
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { deletePerson })(People);
