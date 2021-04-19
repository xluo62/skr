import React, { Component } from "react";

class Notification extends Component {
  constructor(props) {
    //console.log("caonima");
    super(props);
  }
  componentDidMount() {
    const { toggleState, updateQueue, queue } = this.props;
    this.token = window.setTimeout(() => {
      console.log("DIDMOUNTSETTIMEOUT");
      toggleState();
    }, 2000);
  }
  //   componentDidUpdate() {
  //     const { toggleState, updateQueue, queue } = this.props;
  //     // this.token2 = window.setTimeout(() => {
  //     //   //   if (queue.length !== 0) {
  //     //   //     updateQueue();
  //     //   //   } else {
  //     //   //     toggleState();
  //     //   //   }
  //     //   console.log("DIDUPDATE");
  //     //   updateQueue();
  //     }, 2000);
  //   }
  componentWillUnmount() {
    window.clearTimeout(this.token);
  }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (nextProps.queue.length === 0) {
  //       this.props.toggleState();
  //     }
  //     return false;
  //   }
  render() {
    // const { toggleState, updateQueue, queue } = this.props;
    // this.token2 = window.setTimeout(() => {
    //   if (queue.length !== 0) {
    //     updateQueue();
    //   } else {
    //     toggleState();
    //   }
    // }, 2000);
    return <div>Hi I am Notification</div>;
  }
}
export default class Toast2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendering: false,
      queue: [],
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.rendering) {
      console.log("queue increase");
      this.setState((state, props) => {
        return {
          queue: [...state.queue, "newEvent"],
        };
      });
    } else {
      this.setState({
        rendering: true,
      });
    }
  };

  toggleState = () => {
    console.log("toggleState");
    if (this.state.queue.length === 0) {
      //   setTimeout(() => {
      // this.setState({
      //     rendering: false,
      //   });
      //   }, 2000);
      this.setState({
        rendering: false,
      });
    } else {
      this.updateQueue();
    }
  };
  updateQueue = () => {
    console.log("queue decrease");
    console.log(this.state.queue);

    setTimeout(() => {
      this.setState((state, props) => {
        return {
          queue: state.queue.slice(1),
        };
      });
      this.toggleState();
    }, 2000);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>

        {this.state.rendering ? (
          <Notification
            toggleState={this.toggleState}
            updateQueue={this.updateQueue}
            queue={this.state.queue}
          ></Notification>
        ) : null}
      </div>
    );
  }
}
