import React from 'react';
import getData from '../../utils/fetch';
import Options from '../Options/Options';
import Steps from '../Steps/Steps';

export default class Drinks extends React.Component {
  state = {
    names: null,
    steps: null,
  }

  componentDidMount() {
    getData('/names')
      .then(names => this.setState({ names }));
  }

  render() {
    const { names, steps } = this.state;
    return (
      <React.Fragment>
        <h2>
          Drinks section
        </h2>
        <section>
          {!names
            && (
              <h4>
                Loading drinks...
              </h4>
            )}
          {names
            && <Options options={names} />
          }
        </section>
        <section>
          {steps
            && <Steps steps={steps} />
          }
        </section>
      </React.Fragment>
    );
  }
}
