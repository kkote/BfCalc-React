import React from "react";
import { Card,  CardTitle, CardText } from 'reactstrap';
import {  Col } from 'reactstrap';
import { parse } from "url";


class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        res: "",
        data:"",
        tdee:"",
        tdeeA: "about tdee",
        bmi:"",
        bmiR: "",
        bf:"",
        bfR:'range',
        error: "error"
      };
      this.setDisplay = this.setDisplay.bind(this);
      };


  setDisplay() {
    const res = this.props.res;
    const data = this.props.data;

    let {gender, age, feet, inches, waist, weight, neck, hips, activity} = data;
    waist = parseInt(waist);
    neck = parseInt(neck);
    hips = parseInt(hips);
    inches = parseInt(inches);
    let height = ((feet * 12) + inches);
   

    function findBf(g, w, n, ht, h) {
      const Log10 = X => (Math.log(X) / Math.log(10));
      
      let mCalc = ((86.010 * (Log10(w - n))) - (70.041 * (Log10(ht))) + 36.76);
      let fCalc = (163.205 * Log10(w + h - n) - 97.684 * Log10(ht) - 78.387);

      var bf = (g === 'male') ? mCalc : fCalc;
      return bf
    };


    function bmiRange(bmi) {
      return (bmi < 18.5)              ? "Underweight"
            :(bmi >= 18.5 && bmi < 25) ? "Normal"
            :(bmi >= 25 && bmi < 30)   ? "Overweight"
            :                            "Obese";
    };


    function findTdee(gender, activity, w, ht, age) {
      // BMR = Basal Metabolic Rate
      var mBMR = 66 + (6.23 * w) + (12.7 * ht) - (6.8 * age);
      var fBMR = 655 + (4.35 * w) + (4.7 * ht) - (4.7 * age);

      var tdee = (gender === "male") ? (mBMR * activity) : (fBMR * activity);
      return tdee
    };


    // bmi = Body Mass Index;  bf = Body Fat Percentage; tdee = Total Daily Energy Expenditure
    const bmi = ((weight / (height*height)) * 703).toPrecision(3);
    const bmiR = bmiRange(bmi);
    const bf = findBf(gender, waist, neck, height, hips).toPrecision(3);
    const tdee = findTdee(gender, activity, weight, height, age).toPrecision(4);


    this.setState(
      {
        bf: bf,
        bmi: bmi,
        bmiR: bmiR,
        tdee: tdee
      }
    );
  }

    componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setDisplay();
    }
  }
  
    render() {
      const {bmi, bf, tdee, bmiR, bfR, tdeeA} = this.state; 

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