import React from 'react';
import getData from '../utils/fetch';
import Options from './Options';
import Steps from './Steps';
import Counter from './Counter';

export default class Drinks extends React.Component {
  state = {
    names: '',
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
                <Counter steps={steps} />
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
