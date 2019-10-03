import React from "react";
import Stats from "./statDisplay";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon} from 'reactstrap';

class CalcForm extends React.Component {
  constructor() {
    super();
    this.state = {
      form:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  setFormData() {
    const lastEntry = this.props.prevForm[0];
    console.log(lastEntry);
    const form = "form";
 
    this.setState(
      {
        form: lastEntry
      }
    );
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.props.prevForm !== prevProps.prevForm) {
      this.setFormData();
    }
  }

  handleSubmit(event) {
   
    
    const data = new FormData(event.target);

    const dataObj = Object.fromEntries(data);
    console.log(dataObj);
    const stringdata = JSON.stringify(dataObj, null, 2);
    console.log(stringdata);
    
    this.setState({
      res: stringdata,
      data: dataObj
    });
    event.preventDefault();
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }


  render() {

    const {gender, date, age, weight, feet, inches, hips, waist, neck, activity} = this.state.form;

    const ActivityGroup = (props) => (
      <FormGroup check>
                  <Label htmlFor={props.htmlFor} check>
                    <Input id={props.id} name="activity" type="radio" value={props.value} required />{' '}
                    {props.title}</Label>
      </FormGroup>
    );


    
    const HeightGroup = (props) => (
      <Col className="heightRow">
      <Label htmlFor={props.htmlFor}>
        <Input id={props.id} name={props.name} type="number" defaultValue={props.default} placeholder='Inches' min={props.min} max={props.max} required />
       {/*} <span className="heightSpan">Inches</span> */}
      </Label>
    </Col>
    );




   

    return (
      <Container className="calcAndStat">
        <Col className="calcForm">
          <header>
            <h4>Your Measurements</h4>
          </header>
          <hr></hr>
          <Form onSubmit={this.handleSubmit}>

            <Row form>
              <Col >

                <FormGroup tag="fieldset" row>
                  <legend className="col-form-label col-sm-2">Gender</legend>

                  <FormGroup check>
                    <Label check>
                      <Input id="female" name="gender" type="radio" value={'female'} defaultChecked />{' '}
                      Female
                    </Label>
                  </FormGroup>

                  <FormGroup check>
                    <Label check>
                      <Input id="male" name="gender" type="radio" value={'male'} required />{' '}
                      Male
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>

              <Col>
                <Label htmlFor="date"> Date
                  <Input id="date" name="date" type="date" defaultValue={'2019-09-11'} required />
                </Label>
              </Col>
            </Row>


            <Row form>

          {/*} <Col>
                <FormGroup className="inputRow basicsRow ">
                  <Label htmlFor="age"> Age
                    <Input id="age" name="age" type="number" defaultValue="28" min="18" max="99" required />
                  </Label>
                </FormGroup>
              </Col>  */}

              <Col>
                <FormGroup className="inputRow basicsRow ">
                  <Label htmlFor="age"> Age 
                    <Input id="age" name="age" type="number" defaultValue={age}  min="18" max="99" required />
                  </Label>
                </FormGroup>
              </Col>  

  

              <Col>
                <Label htmlFor="weight"> Weight
                <Input name="weight" type="number" defaultValue="115" min="85" max="600" required />
                </Label>
              </Col>

            </Row>


            <FormGroup >
              <Label htmlFor="Height">
                Height </Label>
              <Row form>

                <Col className="heightRow">
                  <InputGroup>
                  
                    <Input id="feet" name="feet" type="number" defaultValue="5" placeholder='Feet' min="4" max="7" required />
                    <InputGroupAddon addonType="append">Feet</InputGroupAddon>
                   
                    </InputGroup>
                    {/*<span className="heightSpan">Feet</span> */}
                 
                </Col>
                
                <HeightGroup 
                htmlFor="inches" id="inches" name="inches"
                min="0" max="11" default={this.state.form.inches}/>

               {/*} <Col className="heightRow">
                  <Label htmlFor="inches">
                    <Input id="inches" name="inches" type="number" defaultValue="3" placeholder='Inches' min="0" max="11" required />
                   {/*} <span className="heightSpan">Inches</span> 
                  </Label>
                </Col>  */}

              </Row>

            </FormGroup>

          <hr></hr>


            <FormGroup >
              <Label htmlFor="measurements" className="fieldBold">
                Measurements (Inches)</Label>
              {/*} <legend className="col-form-label col-sm-2">Height</legend>  */}
              <Row form>

                <Col >
                  <Label htmlFor="hips"> Hips
                    <Input id="hips" name="hips" type="number" defaultValue="34" min="25" max="60" required />
                  </Label>
                </Col>

                <Col >
                  <Label htmlFor="waist"> Waist
                    <Input id="waist" name="waist" type="number" defaultValue="25" min="18" max="50" required />
                  </Label>
                </Col>

                <Col >
                  <Label htmlFor="neck"> Neck
                   <Input id="neck" name="neck" type="number" defaultValue="12" min="10" max="26" required />
                  </Label>
                </Col>
              </Row>
            </FormGroup>

            <Row form>
              <FormGroup tag="fieldset" row>
                <legend className="col-form-label col-sm-2">Activity Level</legend>

                 
                  <ActivityGroup 
                    id="none"
                    htmlFor="none"
                    title="None"
                    value= "1.2"
                    type="radio"
                    name="activity"
                    /> 

                <FormGroup check>
                  <Label htmlFor="light" check>
                    <Input id="light" name="activity" type="radio" value="1.375" defaultChecked required />{' '}
                    Light</Label>
                </FormGroup>

                <FormGroup check>
                  <Label htmlFor="normal" check>
                    <Input id="normal" name="activity" type="radio" value="1.55" required />{' '}
                    Normal</Label>
                </FormGroup>

                <FormGroup check>
                  <Label htmlFor="extra" check>
                    <Input id="extra" name="activity" type="radio" value="1.725" required />{' '}
                    Extra</Label>
                </FormGroup>

                <FormGroup check>
                  <Label htmlFor="heavy" check>
                    <Input id="heavy" name="activity" type="radio" value="1.9" required />{' '}
                    Heavy</Label>
                </FormGroup>

              </FormGroup>
            </Row>

            <button>Calculate </button>
          </Form>

        </Col>


        <hr></hr>
      <Stats  
      res={this.state.res}
      data={this.state.data}
        />  

        <br></br>

        {/* {this.state.res && (
            <div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
            </div>
        )}  */}

      </Container>
    );
  }
}


export default CalcForm;