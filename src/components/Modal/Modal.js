import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    return createPortal(
      <div className="Backdrop">
        <div className="Content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
