class Toast {
  constructor() {
    if (Toast.instance == null) {
      Toast.instance = this;
      this.msg = "toast window";
      this.rendering = false;
      this.queue = [];
    }
    return Toast.instance;
  }
  queueing(node) {
    this.queue.push(node);
  }
}
//const toast = new Toast();
//Object.freeze(toast);
let count = 0;
const button = document.getElementById("toast");
let toastObj = new Toast();
const newNode = document.createElement("div");
const newTextNode = document.createTextNode(toastObj.msg);
newNode.appendChild(newTextNode);

button.addEventListener("click", function () {
  if (toastObj.rendering) {
    console.log("入队列");
    toastObj.queueing(newNode);
  } else {
    toastObj.rendering = true;
    render();
  }
});
function render() {
  toastObj.rendering = true;
  //toastObj.queueing(newNode);
  document.body.insertBefore(newNode, button.nextSibling);
  const parentNode = newNode.parentNode;
  console.log("我被展示了" + ++count);
  setTimeout(() => {
    toastObj.rendering = false;
    parentNode.removeChild(newNode);
    console.log(toastObj.queue);
    if (toastObj.queue.length !== 0) {
      console.log("出队列");

      toastObj.queue.pop();
      render();
    }
  }, 3000);
}
