import React from "react";

const Modal = ({ title, body, onClose, redirectPath }) => {
 

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document" style={{ width: "100%" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{body}</p>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-primary">
              Save changes
            </button> */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
