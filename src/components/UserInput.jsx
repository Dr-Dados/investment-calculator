import React, { useState } from "react";

const UserInput = ({ annualData, setAnnualData }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={annualData.initialInvestment}
            onChange={(e) =>
              setAnnualData({ ...annualData, initialInvestment: +e.target.value })
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            value={annualData.annualInvestment}
            onChange={(e) =>
              setAnnualData({ ...annualData, annualInvestment: +e.target.value })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            value={annualData.expectedReturn}
            onChange={(e) =>
              setAnnualData({ ...annualData, expectedReturn: +e.target.value })
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={annualData.duration}
            onChange={(e) =>
              setAnnualData({ ...annualData, duration: +e.target.value })
            }
          />
        </p>
      </div>
    </div>
  );
};

export default UserInput;
