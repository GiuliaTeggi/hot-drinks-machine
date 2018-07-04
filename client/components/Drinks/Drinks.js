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

  handleClick = (e) => {
    const name = e.target.textContent;
    getData(`/steps/${name}`)
      .then(steps => this.setState({ steps }));
  }

  render() {
    const { names, steps } = this.state;
    return (
      <section className="drinks_section">
        <section className="options_section">
          {!names
            && (
              <h4>
                Loading drinks...
              </h4>
            )}
          {names
            && <Options options={names} select={this.handleClick} />
          }
        </section>
        <section className="steps_section">
          <ol>
            {steps
              && <Steps steps={steps} />
            }
          </ol>
        </section>
      </section>
    );
  }
}
