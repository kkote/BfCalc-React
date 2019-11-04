import React from "react";
import { Card,  CardTitle, CardText } from 'reactstrap';
import {  Col } from 'reactstrap';
// import { parse } from "url";



class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      };

  
    render() {
      const {bmi, bf, tdee, bmiR} = this.props.data; 
      const { bfR, tdeeA } = this.props;

      const StatCard = (props) =>  (
        <Card body >
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.stat}</CardText>
          <CardText>{props.about}</CardText>
        </Card>
      );
      
      return (
    <Col className="statGroup">
      <header>
        <h4>Your Stats</h4>
      </header>
      <hr></hr>
      <div>
        <StatCard title="Body Mass Index"
          stat={bmi}
          about={bmiR} />
        <StatCard title="Body Fat Percentage"
          stat={bf} 
          about={bfR}/>
        <StatCard title="Total Daily Energy Expenditure"
          stat={tdee} 
          about={tdeeA}/>
      </div>
  </Col>
      );
    }
  }
  
  export default Stats;