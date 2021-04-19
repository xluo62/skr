import { Fragment } from "react";
import React, { Component } from "react";
import Test from "./component/timeOut/Test";
import Modal from "./component/modal/Modal";
class App2 extends Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = () => {
    console.log("我是父组件给你的回调函数");
  };

  confirm = () => {
    console.log("我是confirm的回调函数");
  };
  render() {
    const { visible } = this.state;
    return (
      <>
        <p>内容轮番显示</p>
        <Test
          open={true}
          time={1000}
          change={(i, item) => {
            console.log(i, item);
          }}
        >
          <p>内容1</p>
          <p>内容2</p>
          <p>内容3</p>
        </Test>
        <button onClick={this.showModal}>Click Here</button>
        <Modal
          visible={visible}
          title="自定义title"
          content="自定义content"
          onClose={this.closeModal}
          confirm={this.confirm}
        ></Modal>
      </>
    );
  }
}

export default App2;
