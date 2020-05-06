import React, { useState } from "react";
import OTPInput from "./components/OTPInput";
import "./styles.css";

export default function App() {
  const [otp, setOTP] = useState("");
  return (
    <div className="App">
      <OTPInput noOfInputs={4} onChange={otp => setOTP(otp)} />
      OTP: {otp}
    </div>
  );
}

/**
 * noOfInputs => min:3 & max:6
 *
 */
