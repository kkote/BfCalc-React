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



    
  
    render() {
      const {tdee, bf, bmi} = this.props;
      

      
      return (
        <Col className="statGroup">
           <hr></hr>
        <header>
          <h4>Your Stats</h4>
        </header>
        <hr></hr>
        {/*<div className="statItem">
          <h5>Body Mass Index</h5>
          {bmi}
        </div>
        <div className="statItem">
          <h5>Body Fat Percentage</h5>
          {bf}
        </div>
        <div className="statItem">
          <h5>Total Daily Energy Expenditure</h5>
          {tdee}
        </div>  */}

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

      </Col>
        
      );
    }
  }
  
  export default Stats;



  