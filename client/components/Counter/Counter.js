import React from 'react';
import propTypes from 'prop-types';

export default class Counter extends React.Component {
  state = {
    count: '',
    ready: false
  }

  componentDidMount(){
    console.log("Component mounted");
  }
  componentWillReceiveProps(nextProps) {
    const { start, steps } = nextProps;
    if (start === true && steps != null) {
      this.clear();
      console.log("Steps", steps.length)
      const { count } = this.state;
      this.setState({ count: steps.length }, () => {
        this.countDown();
      });
    }
  }

  countDown = () => {
    const { count } = this.state;
    let time = count;
      if (time > 0){
      this.interval = setInterval(() => {
      time--
      if (time === 0){this.clear()}
      else this.setState({ count: time })}, 1000)
     }

  }
  
  clear = () => {
    console.log("clear reached")
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
