import React from "react";
import Stats from "./statDisplay";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class CalcForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    const stringdata = stringifyFormData(data);
    console.log(stringdata);
    const dataP = JSON.parse(stringdata);
    const heightInch = ((dataP.feet * 12)+(dataP.inches * 1));

    const bmiDisplay = ((dataP.weight / 3969) * 703).toPrecision(3);
    const bfDisplay = findBf(dataP.gender, dataP.waist, dataP.neck, heightInch, dataP.hips);
    console.log(bfDisplay);
    const tdeeDisplay = findTdee(dataP.gender, dataP.activity, dataP.weight, heightInch, dataP.age);

   
    
    this.setState({
      res: stringdata,
      data: dataP,
      bmiDisplay:bmiDisplay,
      bfDisplay:bfDisplay,
      tdeeDisplay: tdeeDisplay
    });
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }




  render() {
    return (
      <Container className="calcAndStat">
        <Col className="calcForm">
          <header>
            <h4>Your Measurements</h4>
        </header>
        <hr></hr>
        <Form onSubmit={this.handleSubmit}>

        <FormGroup className="inputRow">

          <Label htmlFor="date"> Date
          <Input  id="date" name="date" type="date" defaultValue={'2019-09-11'} required />
          </Label>
          </FormGroup>


      {/*}    <div className="inputRow">
            <label htmlFor="date"> Date
           <input id="date" name="date" type="date" defaultValue={'2019-09-11'} required />
            </label>
          </div>  

      

          <div className="inputRow">
            <fieldset >
              <legend>Gender</legend>

              <label htmlFor="female">
                <input id="female" name="gender" type="radio" value={'female'} />
                Female</label>

              <label htmlFor="male">
                <input id="male" name="gender" type="radio" value={'male'} required />
                Male</label>

            </fieldset>
          </div>*/}


          <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Gender</legend>
         
            <FormGroup check>
              <Label check>
                <Input  id="female" name="gender" type="radio" value={'female'} />{' '}
                Female
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input id="male" name="gender" type="radio" value={'male'} required  />{' '}
                Male
              </Label>
            </FormGroup>
         
        </FormGroup>


          <FormGroup className="inputRow basicsRow basicsRowCombo">

        <Label htmlFor="age"> Age
        <Input  id="age" name="age" type="number" defaultValue={28} min="18" max="99" required  />
        </Label>
        </FormGroup>

        {/*}  <div className="inputRow basicsRow basicsRowCombo">

            <label htmlFor="age">Age
             <input id="age" name="age" type="number" defaultValue={28} min="18" max="99" required />
            </label>
          </div>


          <div className="inputRow basicsRow basicsRowCombo">

            <label htmlFor="weight">Weight
             <input id="weight" name="weight" type="number" defaultValue={115} min="85" max="600" required />
            </label>

          </div>
          */}

          <FormGroup className="inputRow">

        <Label htmlFor="weight"> Weight
        <Input  name="weight" type="number" defaultValue={115} min="85" max="600" required  />
        </Label>
        </FormGroup>

        {/* <label className="inputRow basicsRow heightLabel"> Height
           </label>
          <div className="inputRow basicsRow heightRowMainDiv">

            <div className=" basicsRow heightRow">
              <label htmlFor="feet">
                <input id="feet" name="feet" type="number" defaultValue={5} placeholder='Feet' min="4" max="7" required />
                <span className="heightSpan">Feet</span>
              </label>

              <label htmlFor="inches">
                <input id="inches" name="inches" type="number" defaultValue={3} placeholder='Inches'  min="0" max="11" required />
                <span className="heightSpan">Inches</span>
              </label>
            </div>
          </div> */}
          





          <Row form>
          <Label htmlFor="Height"> 
          Height
        </Label>

         

          <Col >

        <Label htmlFor="feet">
        <Input  id="feet" name="feet" type="number" defaultValue={5} placeholder='Feet' min="4" max="7" required />
        <span className="heightSpan">Feet</span>
        </Label>
        </Col>

        <Col >

        <Label htmlFor="inches"> 
        <Input  id="inches" name="inches" type="number" defaultValue={3} placeholder='Inches'  min="0" max="11" required />
        <span className="heightSpan">Inches</span>
        </Label>
        </Col>
        
        </Row>




          <FormGroup tag="fieldset" >
          <legend className="col-form-label col-sm-2">Measurements(Inches)</legend>

          <FormGroup className="inputRow">

        <Label htmlFor="hips"> Hips
        <Input  id="hips" name="hips" type="number" defaultValue={34} min="25" max="60" required />
        </Label>
        </FormGroup>

        <FormGroup className="inputRow">

        <Label htmlFor="waist"> Waist
        <Input  id="waist" name="waist" type="number" defaultValue={25} min="18" max="50" required />
        </Label>
        </FormGroup>

        <FormGroup className="inputRow">

        <Label htmlFor="neck"> Neck
        <Input  id="neck" name="neck" type="number" defaultValue={12} min="10" max="26" required  />
        </Label>
        </FormGroup>
        
        </FormGroup>



         {/*} <div className="inputRow basicsRow">

            <fieldset>
              <legend>Measurements (Inches)</legend>

              <label htmlFor="hips">Hips
               <input id="hips" name="hips" type="number" defaultValue={34} min="25" max="60" required />
              </label>

              <label htmlFor="waist">Waist
               <input id="waist" name="waist" type="number" defaultValue={25} min="18" max="50" required />
              </label>

              <label htmlFor="neck">Neck
               <input id="neck" name="neck" type="number" defaultValue={12} min="10" max="26" required />
              </label>

            </fieldset>
          </div>

          */}

          <div className="inputRow">

            <fieldset >
              <legend>Activity Level</legend>

              <label htmlFor="none">
                <input id="none" name="activity" type="radio" value={1.2} required />
                None</label>

              <label htmlFor="light">
                <input id="light" name="activity" type="radio" value={1.375} required />
                Light</label>

              <label htmlFor="normal">
                <input id="normal" name="activity" type="radio" value={1.55} required />
                Normal</label>

              <label htmlFor="extra">
                <input id="extra" name="activity" type="radio" value={1.725} required />
                Extra</label>

              <label htmlFor="heavy">
                <input id="heavy" name="activity" type="radio" value={1.9} required />
                Heavy</label>
            </fieldset>
          </div>

          <button>Calculate </button>
        </Form>


       
        </Col>


        
        <hr></hr>
        <Stats
           
            bmi={this.state.bmiDisplay}
            bf={this.state.bfDisplay}
            tdee={this.state.tdeeDisplay}
          />
         
       
       <br></br>
       
        {/*{this.state.res && (
            <div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
            </div>
        )}  */}



        </Container>
    );
  }
}





function stringifyFormData(fd) {
  const data = {};
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}



function findBf(gender, waist, neck, height, hips) {
  const Log10 = X => (Math.log(X) / Math.log(10));

  if (gender === "male") {
    var percentFat = ((86.010 * (Log10((waist *1) - (neck*1)))) - (70.041 * (Log10(height *1))) + 36.76).toPrecision(3);
    return percentFat
  } else {
    var percentFat = (163.205 * Log10((((waist*1) + (hips*1)) - (neck*1))) - 97.684 * Log10(height*1) - 78.387).toPrecision(3);
    return percentFat
  };
};


function findTdee(gender, activity, weight, height, age) {
  if (gender == "male") {
    var bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    return (bmr * activity).toPrecision(4)
  } else {
    var bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    return (bmr * activity).toPrecision(4)
  };
};


export default CalcForm;