import React from "react";
import { Card,  CardTitle, CardText } from 'reactstrap';
import {  Col } from 'reactstrap';
// import { parse } from "url";



class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        res: "",
        data:"",
        tdee:"",
        tdeeA: "",
        bmi:"",
        bmiR: "",
        bf:"",
        bfR:'',
        error: "error"
      };
      // this.setDisplay = this.setDisplay.bind(this);
      };


  // setDisplay() {
  //   const data = this.props.data;

  //   let {gender, age, feet, inches, waist, weight, neck, hips, activity} = data;
  //   waist = parseInt(waist);
  //   neck = parseInt(neck);
  //   hips = parseInt(hips);
  //   inches = parseInt(inches);
  //   let height = ((feet * 12) + inches);
  
  //   const bmi = ((weight / (height*height)) * 703).toPrecision(3);
  //   const bmiR = bmiRange(bmi);
  //   const bf = findBf(gender, waist, neck, height, hips).toPrecision(3);
  //   const tdee = findTdee(gender, activity, weight, height, age).toPrecision(4);


  //   this.setState(
  //     {
  //       bf: bf,
  //       bmi: bmi,
  //       bmiR: bmiR,
  //       tdee: tdee
  //     }
  //   );
  // }

  //   componentDidUpdate(prevProps, prevState) {
  //   if (this.props.data !== prevProps.data) {
  //     this.setDisplay();
  //   }
  // }
  
    render() {
      const {bmi, bf, tdee, bmiR, bfR, tdeeA} = this.props; 

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