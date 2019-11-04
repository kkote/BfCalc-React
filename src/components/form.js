import React from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';


class CalcForm extends React.Component {
  constructor() {
    super();
    this.state = {
      form: "",
      data: { gender: "female", date: "2019-09-11", age: "30", weight: "135", feet: "5", inches: "5", hips: "36", waist: "28", neck: "12", activity: "1.375" }
    };
  }

  setFormData() {
    const lastEntry = this.props.prevForm[0];
    
    this.setState( {form: lastEntry});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.prevForm !== prevProps.prevForm) {
      this.setFormData();
    }
  }  


  render() {

    const { gender, date, age, weight, feet, inches, hips, waist, neck, activity } = this.state.data;

    const InputGroup = (props) => (
      <Col className={props.className}>
        <Label htmlFor={props.id}>{props.title}
          <Input id={props.id} name={props.id} type={props.type} defaultValue={props.default} placeholder={props.placeholder} min={props.min} max={props.max} required />
        </Label>
      </Col>
    );

    const RadioGroup = (props) => (
      <FormGroup check>
        <Label htmlFor={props.id} check>
          <Input id={props.id} name={props.name} type="radio" value={props.value}
            defaultChecked={props.checked} required />{' '}
          {props.title}
        </Label>
      </FormGroup>
    );


    return (
        <Col className="calcForm">
          <header>
            <h4>Your Measurements</h4>
          </header>
          <hr></hr>
         {/*} <Form onSubmit={this.handleSubmit}> */}
         <Form onSubmit={this.props.handleSubmit}>

            <Row form>
              <Col >
                <FormGroup tag="fieldset" row>
                  <legend className="col-form-label col-sm-2">Gender</legend>
                  <RadioGroup id="female" title="Female" name="gender" value="female" checked={gender === 'female'} />
                  <RadioGroup id="male" title="Male" name="gender" value="male" checked={gender === 'male'} />
                </FormGroup>
              </Col>

              <InputGroup id="date" type="date" default={date} />
            </Row>

            <Row form>
              <InputGroup id="age" title="Age" type="number" min="18" max="99" default={age} />
              <InputGroup id="weight" title="Weight" type="number" min="85" max="600" default={weight} />
            </Row>

            <FormGroup >
              <Label htmlFor="Height">
                Height </Label>
              <Row form>
                <InputGroup id="feet" className="heightRow" placeholder="Feet" type="number" min="4" max="7" default={feet} />
                <InputGroup id="inches" className="heightRow" placeholder="Inches" type="number" min="0" max="11" default={inches} />
              </Row>
            </FormGroup>

            <hr></hr>
            <FormGroup >

              <Label htmlFor="measurements" className="fieldBold">
                Measurements (Inches)</Label>
              <Row form>
                <InputGroup id="hips" title="Hips" type="number" default={hips} />
                <InputGroup id="waist" title="Waist" type="number" default={waist} />
                <InputGroup id="neck" title="Neck" type="number" default={neck} />
              </Row>
            </FormGroup>

            <Row form>
            <Label htmlFor="activity" className="fieldBold">
                Activity Level</Label>
              <FormGroup tag="fieldset" row>
               
                <RadioGroup id="none" title="None" name="activity" value="1.2" checked={activity === '1.2'} />
                <RadioGroup id="light" title="Light" name="activity" value="1.375" checked={activity === '1.375'} />
                <RadioGroup id="normal" title="Normal" name="activity" value="1.55" checked={activity === '1.55'} />
                <RadioGroup id="extra" title="Extra" name="activity" value="1.725" checked={activity === '1.725'} />
                <RadioGroup id="heavy" title="Heavy" name="activity" value="1.9" checked={activity === '1.9'} />
              </FormGroup>

            </Row>
            <button>Calculate </button>
          </Form>
        </Col>


    );
  }
}


export default CalcForm;