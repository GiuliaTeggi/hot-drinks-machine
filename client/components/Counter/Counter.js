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
    const { count, number } = this.state;
    const { start, steps } = nextProps;
    if (start === true && steps != null) {
      console.log("Steps length", steps.length)
      this.setState({ count: steps.length }, () => {
        console.log("Count new", count)
        this.countDown();
      });
    }
  }

  countDown = () => {
    const { count } = this.state;
    let time = count;
    // if (time === 0){
    //   this.clear();
    // }
    setInterval(() => {
      time--
      this.setState({ count: time })}, 1000)
  }

  clear = () => {
    clearInterval(setInterval);
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
