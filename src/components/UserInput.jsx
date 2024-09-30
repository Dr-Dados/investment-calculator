import React, { useState } from "react";

const UserInput = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>initial investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.valueAsNumber)}
          />
        </div>
        <div>
          <label>Annual investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={(e) => setAnnualInvestment(e.target.valueAsNumber)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.valueAsNumber)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.valueAsNumber)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
