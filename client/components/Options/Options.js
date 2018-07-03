import React from 'react';
import propTypes from 'prop-types';

const Options = (props) => {
  const { options } = props;

  const articles = options.map(drink => (
    <article key={drink}>
      <button type="button">
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
  options: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Options;
