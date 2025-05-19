// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ onNext }) => {
  return (
    <div className="confirmation">
      <h2>Tickets online buchen</h2>
      <div className="success-message">
        <span className="checkmark">✔</span>
        <h3>Zahlung Erfolgreich</h3>
      </div>
      <button onClick={onNext}>Tickets Drucken</button>
    </div>
  );
};

export default Confirmation;