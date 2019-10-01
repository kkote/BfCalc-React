import React from "react";
import { Card,  CardTitle, CardText } from 'reactstrap';
import {  Col } from 'reactstrap';


class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        res: "",
        tdeeS:"",
        bmiS:"",
        bfS:"",
        error: "error"
      };
      this.setDisplay = this.setDisplay.bind(this);
      };


  setDisplay() {
    let res = this.props.res;
    const dataP = JSON.parse(res);


    function findBf(gender, waist, neck, height, hips) {
      const Log10 = X => (Math.log(X) / Math.log(10));

      if (gender === "male") {
        var percentFatM = ((86.010 * (Log10((waist * 1) - (neck * 1)))) - (70.041 * (Log10(height * 1))) + 36.76).toPrecision(3);
        return percentFatM
      } else {
        var percentFatF = (163.205 * Log10((((waist * 1) + (hips * 1)) - (neck * 1))) - 97.684 * Log10(height * 1) - 78.387).toPrecision(3);
        return percentFatF
      };
    };


    function findTdee(gender, activity, weight, height, age) {
      if (gender == "male") {
        var bmrM = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
        return (bmrM * activity).toPrecision(4)
      } else {
        var bmrF = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        return (bmrF * activity).toPrecision(4)
      };
    };

    const heightInch = ((dataP.feet * 12) + (dataP.inches * 1));
    const bmiDisplay = ((dataP.weight / 3969) * 703).toPrecision(3);
    const bfDisplay = findBf(dataP.gender, dataP.waist, dataP.neck, heightInch, dataP.hips);
    const tdeeDisplay = findTdee(dataP.gender, dataP.activity, dataP.weight, heightInch, dataP.age);


    this.setState(
      {
        bfS: bmiDisplay,
        bmiS: bfDisplay,
        tdeeS: tdeeDisplay
      }
    );
  }


    componentDidUpdate(prevProps, prevState) {
    if (this.props.res !== prevProps.res) {
      this.setDisplay();
    }
  }
  
    render() {
      const {tdee, bf, bmi} = this.props;
     const {bmiS, bfS, tdeeS} = this.state; 
      

      
      return (
        <Col className="statGroup">
         
        <header>
          <h4>Your Stats</h4>
        </header>
        <hr></hr>

        <div>
        <Card body >
        <CardTitle>Body Mass Index</CardTitle>
        <CardText>{bmi}</CardText>
      </Card>

      <Card body >
        <CardTitle>Body Fat Percentage</CardTitle>
        <CardText>{bf}</CardText>
      </Card>

      <Card body >
        <CardTitle>Total Daily Energy Expenditure</CardTitle>
        <CardText>{tdee}</CardText>          
      </Card>



    <Card body >
        <CardTitle>Test</CardTitle>
        <CardText>{bmiS}</CardText>   
        <CardText>{bfS}</CardText>   
        <CardText>{tdeeS}</CardText>          
      </Card>  



        </div>
  
      </Col>


        
      );
    }
  }
  
  export default Stats;


{/*}

  import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedProduct: {},
        stat: this.props.stat,
        error: "error"
      };
      }



      function Comment(props) {
        return (
          <div className="Comment">
            <div className="UserInfo">
              <Avatar user={props.author} />
              <div className="UserInfo-name">
                {props.author.name}
              </div>
            </div>
            <div className="Comment-text">
              {props.text}
            </div>
            <div className="Comment-date">
              {formatDate(props.date)}
            </div>
          </div>
        );
      }
    
  
    render() {
      const {tdee, bf, bmi} = this.props;
      

      
  return (

    <Col className="statGroup">

      <header>
        <h4>Your Stats</h4>
      </header>
      <hr></hr>
      <div>
        <StatCard title="Body Mass Index"
          stat={bmi} />
        <StatCard title="Body Fat Percentage"
          stat={bf} />
        <StatCard title="Total Daily Energy Expenditure"
          stat={tdee} />
        {/*<StatCard title="Total Daily Energy Expenditure"
       stat={props.tdee} /> 
      </div>
    </Col>


  );
}
  }
  
  export default Stats;
*/}

  