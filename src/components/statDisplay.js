
  

import React from "react";

const Stats = props => {
  return (
      <div className="statGroup">
          <header>
              <h4>Your Stats</h4>
          </header>
          <div className="statItem">
              Body Fat Percentage
      <span id="displayInput" /> <span id="displayBfRange" />
          </div>
          <div className="statItem">
              Body Mass Index <span id="displayBmi" /> <span id="displayBmiRange" />
          </div>
          <div className="statItem">
              Body Mass Distribution <span id="displayLean" /> <span id="displayFatMass" />
          </div>
          <div className="statItem">
              Total Daily Energy Expenditure <span id="displayTdee" />
          </div>
      </div>

);
}

export default Stats;
