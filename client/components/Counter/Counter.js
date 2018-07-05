import React from 'react';
import propTypes from 'prop-types';

export default class Counter extends React.Component {
  state = {
    count: '',
  }

  componentDidMount(){
    console.log("Component mounted");
  }
  componentWillReceiveProps(nextProps) {
    const { count } = this.state;
    const { start, steps } = nextProps;
    if (start === true && steps != null) {
      console.log("Steps", steps.length)
      this.setState({ count: steps.length }, () => {
        console.log("Count", this.state.count)
        this.countDown();
      });
    }
  }

  countDown = () => {
    const { count } = this.state;
    let time = count;
    console.log("Countdown", time)
     // if (count === 0) { this.clear(); }
      if (time > 0){
      this.interval = setInterval(() => {
      time--
      console.log("Time", time)
      if (time === 0){this.clear()}
      else this.setState({ count: time })}, 1000)
     }

  }
  
  // countDown = () => {
  //   const { count } = this.state;
  //   let time = count;
  //   console.log("Countdown", time)
  //    if (time === 0) console.log("Zero")
  //   // if (count === 0) { this.clear(); }
  //    else if (time > 0){
  //     this.interval = setInterval(() => {
  //     time--
  //     console.log("Time", time)
  //     this.setState({ count: time })}, 1000)
  //     }
  //   }

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
