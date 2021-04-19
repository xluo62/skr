import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToastContext = createContext();

export function ToastContextProvider(props) {
  //定义初始全局初始状态。
  const notification = [
    // {
    //   id: uuidv4(),
    //   type: "SUCCESS",
    //   title: "Successfully fetched data",
    //   message: "Successfully retrived all posts",
    // },
    // {
    //   id: uuidv4(),
    //   type: "INFO",
    //   title: "Informational title",
    //   message: "This is for your info",
    // },
    // {
    //   id: uuidv4(),
    //   type: "WARNING",
    //   title: "warning title",
    //   message: "This is a warning message",
    // },
    // {
    //   id: uuidv4(),
    //   type: "DANGER",
    //   title: "Error title",
    //   message: "This is an error message",
    // },
  ];
  const queue = [];
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "ADD_NOTIFICATION":
          //return [...state, action.payload];
          console.log("add_notification");
          console.log(state.queue);
          if (state.queue.length === 0) {
              return state;
          } else {
            return {
                notification: [state.queue[0]],
                queue: [...state.queue.slice(1)],
            };
          }
          
        case "DELETE_NOTIFICATION":
          //return state.filter((element) => element.id !== action.payload);
          console.log("DELETE_NOTIFICATION");
          return {
            ...state,
            notification: [],
          };
        case "ADD_QUEUE":
          console.log("add_queue");
          return {
            ...state,
            queue: [...state.queue, action.payload],
          };
        default:
          return state;
      }
    },
    { notification, queue }
  );
  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ToastContext.Provider>
  );
}
