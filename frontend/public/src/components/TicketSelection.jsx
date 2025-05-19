// src/components/TicketSelection.js
import React, { useState } from 'react';

const TicketSelection = ({ onNext }) => {
  const [tickets, setTickets] = useState({ adults: 0, children: 0 });
  const [isGroup, setIsGroup] = useState(false);

  const handleTicketChange = (type, value) => {
    setTickets({ ...tickets, [type]: value });
  };

  const total = isGroup
    ? 175 // Group ticket for 10 people
    : tickets.adults * 30 + tickets.children * 15;

  return (
    <div className="ticket-selection">
      <h2>{isGroup ? 'Tagestickets für Gruppen ab 10 Personen' : 'Tagestickets'}</h2>
      {!isGroup ? (
        <>
          <div className="ticket-option">
            <span>Erwachsene <small>(ab 16 Jahren)</small></span>
            <input
              type="number"
              min="0"
              value={tickets.adults}
              onChange={(e) => handleTicketChange('adults', parseInt(e.target.value))}
            />
            <span>30 CHF</span>
          </div>
          <div className="ticket-option">
            <span>Kinder <small>(6-15 Jahre)</small></span>
            <input
              type="number"
              min="0"
              value={tickets.children}
              onChange={(e) => handleTicketChange('children', parseInt(e.target.value))}
            />
            <span>15 CHF</span>
          </div>
          <div className="total">Total: {total} CHF</div>
        </>
      ) : (
        <div className="group-ticket">
          <div className="ticket-option">
            <span>Gruppen ab 10 Personen</span>
            <span>175 CHF</span>
          </div>
          <div className="total">Total: 175 CHF</div>
        </div>
      )}
      <div className="date-picker">
        <label>Datum des Besuches</label>
        <input type="date" defaultValue="2023-12-22" />
      </div>
      <button onClick={() => setIsGroup(!isGroup)}>
        {isGroup ? 'Einzelkarten' : 'Gruppentickets'}
      </button>
      <button onClick={() => onNext({ tickets, total, isGroup })}>Tickets Buchen</button>
    </div>
  );
};

export default TicketSelection;