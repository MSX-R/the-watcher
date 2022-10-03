import React, {useState} from 'react'
import "./Modal.css"

const Modal = () => {
    return shown ? (
      <div
        className="modal-backdrop"
        onClick={() => {
          // close modal when outside of modal is clicked
          close();
        }}
      >
        <div
          className="modal-content"
          onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <button onClick={close}>Close</button>
          <h1>Titre</h1>
          <p>Description</p>
        </div>
      </div>
    ) : null;
  }

export default Modal