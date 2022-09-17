import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
const Modal = ({ closeModal, children }) => {
  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className={styles['close-btn']}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('search-modal')
  );
};

export default Modal;
