import React from "react";



class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedProduct: {},
        stat: this.props.stat,
        error: "error"
      };
      }
  
  
    render() {
      const {tdee, bf, bmi } = this.props;

      
      
      return (
        <div className="statGroup">
        <header>
          <h4>Your Stats</h4>
        </header>
        <div className="statItem">
          <h5>Body Fat Percentage</h5>
          {bf}
        </div>
        <div className="statItem">
          <h5>Body Mass Index</h5>
          {bmi}
        </div>
        <div className="statItem">
          <h5>Total Daily Energy Expenditure</h5>
          {tdee}
        </div>
      </div>
        
      );
    }
  }
  
  export default Stats;



  