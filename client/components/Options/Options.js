import React from 'react';
import propTypes from 'prop-types';

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
  options: propTypes.arrayOf(propTypes.string).isRequired,
  select: propTypes.func.isRequired,
};

export default Options;
