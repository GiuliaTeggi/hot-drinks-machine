import React from 'react';
import getData from './utils/fetch';

export default class App extends React.Component {
  state = {
    names: []
  }

  componentDidMount() {
    getData(`/names`)
      .then(names => this.setState({ names }));
  }
}

render() {
  return (
    <section />
  );
}
}
