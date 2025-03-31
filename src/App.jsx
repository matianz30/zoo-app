// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TicketSelection from './components/TicketSelection';
import PaymentOptions from './components/PaymentOptions';
import Confirmation from './components/Confirmation';
import TicketPrint from './components/TicketPrint';

const App = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState(null);

  const handleNext = (data) => {
    if (step === 1) {
      setTicketData(data);
    }
    setStep(step + 1);
  };

  return (
    <div className="app">
      <Header />
      {step === 1 && <TicketSelection onNext={handleNext} />}
      {step === 2 && <PaymentOptions ticketData={ticketData} onNext={handleNext} />}
      {step === 3 && <Confirmation onNext={handleNext} />}
      {step === 4 && <TicketPrint />}
    </div>
  );
};

export default App;