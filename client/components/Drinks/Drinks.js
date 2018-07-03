import React from 'react';
import getData from '../../utils/fetch';
import Options from '../Options/Options';

export default class App extends React.Component {
  state = {
    drinks: null,
  }

  componentDidMount() {
    getData('/names')
      .then(drinks => this.setState({ drinks }, () => console.log(this.state.drinks)));
  }

  render() {
    const { drinks } = this.state;
    return (
      <React.Fragment>
        <h4>
          Drinks section
        </h4>
        {!drinks
          && (
            <h3>
              Loading drinks...
            </h3>
          )}
        {drinks
          && <Options options={drinks} />
        }
      </React.Fragment>
    );
  }
}
