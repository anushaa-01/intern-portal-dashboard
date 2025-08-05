import React from 'react';

const Payment = () => {
  const handlePayment = () => {
    alert('Redirecting to Razorpay... (simulate)');
    // Here you would call Razorpay checkout script
  };

  return (
    <div>
      <h2>Premium Video Download</h2>
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
};

export default Payment;
