/**
 自定义消息订阅与发布
 */



const PubSub = {

}
/*
  {
    add: {
      token1: callback1,
      token2: callback2
    },
    update: {
      token3: callback3
    }
  }
*/
let callbacksObj = {} // container to save all of callbacks
let id = 0; //id to generate token for each event

//1. 订阅消息
PubSub.subscribe = function (msgName, callback) {
    //generate token
    const token = 'token_' + ++id;
    //如果当前有事件已经被注册过了，加入到以有的callbacks对象里去，否则创建一个新的数组
    //因为token是唯一性的，所以得用obj或者map来存储才可以。
    const callbacks = callbacksObj[msgName];
    if (callbacks) {
        callbacks[token] = callback;
    } else {
        callbacksObj[msgName] = {
            [token]: callback
        }
    }
    //返回token
    return token;
}
//2. 发布异步的消息
PubSub.publish = function (msgName, data) {
    //取出当前消息对应的所有callbacks
    const callbacks = callbacksObj[msgName];
    if (callbacks) {
        //启动定时器 执行所有的回调函数（宏任务）
        setTimeout(() => {
            Object.values(callbacks).forEach((item, index) => {
                item(data);
            })
        }, 0);
    }
}

//3. 发布同步消息
PubSub.publishSync = function (msgName, data) {
    const callbacks = callbacksObj[msgName];
    if (callbacks) {
        Object.values(callbacks).forEach((item) => {
            item(data);
        })
    }

}

//4,  取消消息订阅
/*
    有几种特殊情况
    1. 没有传入flag，flag 为 undefined
    2. 传入的是token字符串
    3. 传入的是msgName字符串
 */
PubSub.unsubscribe = function (flag) {
    //没有flag或者flag为null， 取消所有回调
    if (!flag) {
        callbacksObj = {};
        return;
    }
    if (typeof flag === 'string') {
        if (flag.indexOf('token_') === 0) {
            //说明flag是一个token
            const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag));
            if (callbacks) {
                delete callbacks[flag];
            }
        } else {
            delete callbacksObj[flag];
        }
    } else {
        throw new Error('your params must be string type');
    }

}
// 订阅消息
PubSub.subscribe('add', (data) => {
    console.log('add()...', data)
})
PubSub.subscribe('add', (data) => {
    console.log('add2()...', data)
})
const token = PubSub.subscribe('add', (data) => {
    console.log('add3()...', data)
})
PubSub.subscribe('update', (data) => {
    console.log('update()...', data)
})


// PubSub.unsubscribe(token)
// PubSub.unsubscribe('add')
// PubSub.unsubscribe()

PubSub.publish('add', 12)
PubSub.publish('update', 13)
//PubSub.publish(token, 14)
console.log('----')
PubSub.unsubscribe(token)
//PubSub.unsubscribe('add')