import React from 'react';
import PropTypes from 'prop-types';

const Steps = (props) => {
  const { steps } = props;
  return (
    <React.Fragment>
      {steps.map((step, index) => (
        <li key={index}>
          {step}
        </li>
      ))}
    </React.Fragment>
  );
};

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
