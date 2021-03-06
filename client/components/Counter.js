import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  static defaultProps = {
    steps: 0,
  }

  state = {
    count: null,
    total: null,
  }

  componentWillReceiveProps(nextProps) {
    const { steps } = nextProps;
    if (steps !== null) {
      this.clear();
      this.setState({ count: 1, total: steps.length }, () => {
        this.countUp();
      });
    }
  }

  countUp = () => {
    const { count, total } = this.state;
    let time = count;
    if (time < total) {
      this.interval = setInterval(() => {
        time += 1;
        if (time === total + 1) { this.clear(); } else this.setState({ count: time });
      }, 900);
    }
  }

  clear = () => {
    clearInterval(this.interval);
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
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

Counter.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
};
