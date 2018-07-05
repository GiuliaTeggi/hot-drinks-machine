import React from 'react';
import PropTypes from 'prop-types';

const Options = (props) => {
  const { options, select } = props;

  const articles = options.map(drink => (
    <article key={drink}>
      <button type="button" onClick={select}>
        {drink}
      </button>
    </article>
  ));

  return (
    <section>
      {articles}
    </section>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  select: PropTypes.func.isRequired,
};

export default Options;
