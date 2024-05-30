// AlertMessage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './AlertMessage.module.css';

// eslint-disable-next-line react/prop-types
const AlertMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className={styles.alertContainer}>
      <p>{message}</p>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default AlertMessage;
