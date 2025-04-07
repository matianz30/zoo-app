// src/components/PaymentOptions.js
import React, { useState } from 'react';

const PaymentOptions = ({ ticketData, onNext }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePayment = () => {
    if (paymentMethod === 'sms' && !phoneNumber) {
      alert('Please enter a phone number for SMS payment.');
      return;
    }
    onNext();
  };

  return (
    <div className="payment-options">
      <h2>Tickets online buchen</h2>
      <div className="summary">
        <h3>Zusammenfassung</h3>
        <p>Datum des Besuches: 23.11.2022</p>
        {ticketData.isGroup ? (
          <p>Gruppen ab 10 Personen: 175 CHF</p>
        ) : (
          <>
            <p>Erwachsene: {ticketData.tickets.adults} x 30 CHF</p>
            <p>Kinder: {ticketData.tickets.children} x 15 CHF</p>
          </>
        )}
        <p>Total: {ticketData.total} CHF</p>
      </div>
      <h3>Bezahlmöglichkeiten</h3>
      <div className="payment-methods">
        <button onClick={() => setPaymentMethod('twint')}>
          <img src="https://via.placeholder.com/50" alt="Twint" />
          Twint
        </button>
        <button onClick={() => setPaymentMethod('credit')}>
          <img src="https://via.placeholder.com/50" alt="Credit Card" />
          Kreditkarte
        </button>
        <button onClick={() => setPaymentMethod('paypal')}>
          <img src="https://via.placeholder.com/50" alt="Pay-Pal" />
          Paypal
        </button>
      </div>
      {paymentMethod === 'sms' && (
        <div className="sms-payment">
          <h3>Per SMS senden</h3>
          <input
            type="text"
            placeholder="Tel Nr."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handlePayment}>Senden</button>
        </div>
      )}
      <button onClick={handlePayment}>Weiter</button>
    </div>
  );
};

export default PaymentOptions;