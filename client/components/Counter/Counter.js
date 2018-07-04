import React from 'react';
import propTypes from 'prop-types';

export default class Counter extends React.Component {
  state = {
    count: null,
  }

  componentDidUpdate() {
    const { count } = this.state;
    const { start, steps } = this.props;
    if (start === true && count !== steps.length) {
      this.setState({ count: steps.length });
    }
  }

  countDown = () => {
    const { count } = this.state;
    if (count > 0) {
      setTimeout(() => this.setState({ count: count - 1 }), 600);
    } else this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    console.log('Count', count);
    return (
      <React.Fragment>
        {
          count > 0 && (
            <p>
              {count}
            </p>
          )
        }
        {
          count === 0
          && (
            <p>
              Your drink is ready!
            </p>
          )
        }
      </React.Fragment>
    );
  }
}
