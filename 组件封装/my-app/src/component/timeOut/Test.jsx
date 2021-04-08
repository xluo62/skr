import React, { Component } from "react";
import PropTypes from "prop-types";
//定时切换
export default class Test extends Component {
  state = {
    index: 0,
    content: [],
  };
  componentDidMount() {
    this.notifyContent();
    this.loop();
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.open !== prevProps.open) {
      this.loop();
    }
    if (this.props.children !== prevProps.children) {
      this.notifyContent();
    }
  }
  static propType = {
    time: PropTypes.number,
    open: PropTypes.bool,
  };
  notifyContent = () => {
    const { children } = this.props;
    const content = Array.isArray(children) ? children : [children];
    this.setState({
      content,
    });
  };
  loop = () => {
    const { time = 1000, open = false } = this.props;
    if (!open) {
      return;
    }
    setTimeout(() => {
      const { content, index } = this.state;
      //调用回调函数
      this.change(index, content[index]);
      const newIndex = index + 1;

      this.setState({
        index: newIndex >= content.length ? 0 : newIndex,
      });
      this.loop();
    }, time);
  };
  change = (index, content) => {
    const { onChange, change } = this.props;
    if (onChange) {
      onChange(index, content);
    }
    if (change) {
      change(index, content);
    }
  };
  getItem = (index) => {
    const { wrapper } = this.props;
    const item = this.state.content[index];
    if (wrapper) {
      return wrapper(item, index);
    }
    return item;
  };
  render() {
    const { time, open, children } = this.props;
    return <div>{this.getItem(this.state.index)}</div>;
  }
}
