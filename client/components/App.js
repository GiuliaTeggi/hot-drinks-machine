import React from 'react';
import Drinks from './Drinks/Drinks';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          Hot Drinks Machine
        </h1>
        <Drinks />
      </React.Fragment>
    );
  }
}
