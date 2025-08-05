import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    alert(`OTP ${otp} verified (simulated).`);
    setOtp('');
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default OTPVerification;
