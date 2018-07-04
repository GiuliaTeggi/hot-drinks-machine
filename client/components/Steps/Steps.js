import React from 'react';
import propTypes from 'prop-types';

const Steps = (props) => {
  const { steps } = props;

  const list = steps.map((step, index) => (
    <li key={index}>
      {step}
    </li>
  ));

  return (
    <React.Fragment>
      {list}
    </React.Fragment>
  );
};

Steps.propTypes = {
  steps: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Steps;
