import React, { useContext, useState } from "react";
import { ToastContext } from "./context/ToastContext";
import Toast from "./component/toast/Toast";
import { v4 as uuidv4 } from "uuid";
//import { v4 as uuidv4 } from "uuid";

export default function App() {
  //const [successQueue, setSuccessQueue] = useState([]);
  const { state, dispatch } = useContext(ToastContext);
  const handleButtonSelect = (type) => {
    switch (type) {
      case "SUCCESS":
        if (state.notification.length === 0) {
          dispatch({
            type: "ADD_QUEUE",
            payload: {
              id: uuidv4(),
              type,
              title: "success",
              message: "seccessfully complete",
            },
          });
          
          dispatch({
            type: "ADD_NOTIFICATION",
          });
          return;
        } else {
          return dispatch({
            type: "ADD_QUEUE",
            payload: {
              id: uuidv4(),
              type,
              title: "success",
              message: "seccessfully complete",
            },
          });
        }

      case "INFO":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "Info",
            message: "Some Information",
          },
        });
      case "WARNING":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "warning",
            message: "This Warning",
          },
        });
      case "DANGER":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "Danger",
            message: "you are in danger",
          },
        });
      default:
        return;
    }
  };

  return (
    <div>
      <div className="main-content">
        <button
          className="button button--success"
          onClick={() => handleButtonSelect("SUCCESS")}
        >
          SUCCESS
        </button>
        <button
          className="button button--success"
          onClick={() => handleButtonSelect("INFO")}
        >
          INFO
        </button>
        <button
          className="button button--success"
          onClick={() => handleButtonSelect("WARNING")}
        >
          WARNING
        </button>
        <button
          className="button button--success"
          onClick={() => handleButtonSelect("DANGER")}
        >
          DANGER
        </button>
      </div>
      <Toast position="bottom-right" autoDeleteInterval={3000}></Toast>
    </div>
  );
}
