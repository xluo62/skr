import React, { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";
import "./Toast.css";

export default function Toast({ position, autoDeleteInterval }) {
  const { state, dispatch } = useContext(ToastContext);
  const selectBackgroundColor = (type) => {
    switch (type) {
      case "INFO":
        return "#5bc0de";
      case "WARNING":
        return "#f0ad4e";
      case "DANGER":
        return "#d9534f";
      case "SUCCESS":
        return "#5cb85c";
      default:
        return;
    }
  };
  console.log(state.notification);
  return (
    <div className={`notification-container ${position}`}>

      {state.notification.map((notification) => {
        
          if (autoDeleteInterval) {
            window.setTimeout(() => {
              dispatch({ type: "DELETE_NOTIFICATION" });
              dispatch({ type: "ADD_NOTIFICATION" });
              
            }, autoDeleteInterval);
          }

          return (
            <div
              style={{
                backgroundColor: selectBackgroundColor(notification.type),
              }}
              key={notification.id}
              className="notification toast"
            >
              <button
                className="close-button"
                onClick={() => {
                  dispatch({
                    type: "DELETE_NOTIFICATION",
                    payload: notification.id,
                  });
                }}
              >
                Cancel
              </button>
              <div>
                <p className="notification-title">{notification.title}</p>
                <p className="notification-message">{notification.message}</p>
              </div>
            </div>
          );
        
      })}
    </div>
  );
}
