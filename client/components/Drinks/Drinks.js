import React from 'react';
import getData from '../../utils/fetch';
import Options from '../Options/Options';
import Steps from '../Steps/Steps';
import Counter from '../Counter/Counter';

export default class Drinks extends React.Component {
  state = {
    names: null,
    steps: null,
    startCount: false,
  }

  componentDidMount() {
    getData('/names')
      .then(names => this.setState({ names }));
  }

  handleClick = (e) => {
    const name = e.target.textContent;
    getData(`/steps/${name}`)
      .then(steps => this.setState({ steps, startCount: true }));
  }

  render() {
    const { names, steps, startCount } = this.state;
    return (
      <section className="machine_section">
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
          <section>
            <ol>
              {steps
                && <Steps steps={steps} />
              }
            </ol>
            <section className="counter_section">
              <Counter steps={steps} start={startCount} />
            </section>
          </section>
        </section>
      </section>
      </section>
    );
  }
}
