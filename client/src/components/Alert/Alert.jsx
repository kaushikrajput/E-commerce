import React from "react";
import './alert.scss'

const Alert = ({ message, onClose, alertType }) => {
  const handleOk = () => {
    onClose();
  };
  return (
    <div className="alert">
      <div className="alert-container">
        {alertType === "error" ? (
          <>
            <img
              src="https://i.ibb.co/HgzrzKf/3588294.png"
              alt="alert"
              className="alert-icon"
            />
            <div className="alert-title">Oops...!</div>
          </>
        ) : (
          <>
            <img
              src="https://i.ibb.co/PYRL1hw/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
              alt="alert"
              className="alert-icon"
            />
          </>
        )}
        <div className="alert-message">{message}</div>
        <button buttonType="alertBox" onClick={handleOk}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
