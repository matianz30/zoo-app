// src/components/TicketPrint.js
import React from 'react';

const TicketPrint = () => {
  return (
    <div className="ticket-print">
      <h2>Tickets Drucken</h2>
      <button>Drucken</button>
      <button>PDF Download</button>
      <div className="qr-codes">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="qr-code">
            <img src="https://via.placeholder.com/100" alt="QR Code" />
            <p>Custom Text</p>
          </div>
        ))}
      </div>
      <button>Zurück zum Zahlungseingang</button>
    </div>
  );
};

export default TicketPrint;