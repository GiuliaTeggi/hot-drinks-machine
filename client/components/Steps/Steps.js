import React from 'react';
import propTypes from 'prop-types';

export default class Steps extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  render() {
    const { steps } = this.props;
    return (
      <React.Fragment>
        {steps.map((step, index) => (
          <li key={index} ref={this.refs.list}>
            {step}
          </li>
        ))}
      </React.Fragment>
    );
  }
}

Steps.propTypes = {
  steps: propTypes.arrayOf(propTypes.string).isRequired,
};

// export default Steps;
