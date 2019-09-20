import React from "react";



class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedProduct: {},
        list: this.props.list,
        error: "error"
      };
      }
  
  
    render() {

        const List = ({ lists }) => (

            Object.keys(this.props.lists).map(key => (
              <Stats
              key={key}
              item={this.props.lists[key]}
              />
            ))
            );
  
      const Stats = ({ key, item }) => 
         (
            <div className="statGroup">
                <header>
                    <h4>Your Stats</h4>
                </header>
                <div className="statItem">
                    Body Fat Percentage
                    {item.weight}
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
      
      return (
        <List />
      );
    }
  }
  
  export default Stats;