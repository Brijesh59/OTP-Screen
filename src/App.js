import React from "react";
import OTPInput from "./components/OTPInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <OTPInput noOfInputs={4} onChange={otp => console.log(otp)} />
    </div>
  );
}

/**
 * noOfInputs => min:3 & max:6
 *
 */
