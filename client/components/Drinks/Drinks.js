import React from 'react';
import getData from '../../utils/fetch';
import Options from '../Options/Options';

export default class Drinks extends React.Component {
  state = {
    drinks: null,
  }

  componentDidMount() {
    getData('/names')
      .then(drinks => this.setState({ drinks }));
  }

  render() {
    const { drinks } = this.state;
    return (
      <React.Fragment>
        <h2>
          Drinks section
        </h2>
        {!drinks
          && (
            <h4>
              Loading drinks...
            </h4>
          )}
        {drinks
          && <Options options={drinks} />
        }
      </React.Fragment>
    );
  }
}
