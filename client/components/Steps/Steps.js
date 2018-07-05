import React from 'react';
import propTypes from 'prop-types';

export default class Steps extends React.Component {

  render() {
    const { steps } = this.props;
    return (
      <React.Fragment>
        {steps.map((step, index) => (
          <li key={index}>
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
