import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Python"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  formInputInfo = {
    "name":"John",
    "age":30,
    "inputs": [
        { "name":"date", 'type':'date'},
      { "name":"gender", 'type':'radio', "genders":[ "male", "female" ] },
      { "name":"age", 'type':'number', 'step':'1', 'min':'18', 'max':'99' },
      { "name":"weight", 'type':'number', 'step':'any', 'min':'90', 'max':'600' },
      { "name":"height", 'type':'number', 'step':'1', 'min':'50', 'max':'100' },
      { "name":"hips", 'type':'number', 'step':'any', 'min':'25', 'max':'60' },
      { "name":"waist", 'type':'number', 'step':'any', 'min':'18', 'max':'50' },
      { "name":"neck", 'type':'number', 'step':'any', 'min':'8', 'max':'25' },
    ]
   } 


  render() {
    return (
        <div style={{width: 300}} >   
        <div class="panel panel-default">
   
        <header>
            <h4>Your Measurements</h4>
        </header>
        <form>
            <fieldset id="gender">
                <label>Male:
            <input type="radio" defaultValue="male" name="genderInput" onchange="{this.handleChange}" />
                </label>

                <label>Female:
            <input type="radio" defaultValue="female" name="genderInput" onchange="{this.handleChange}" />
                </label>

            </fieldset>

            <fieldset id="general">
                <label>Date
            <input className="formControl" id="dateInput" name="date" required type="date" defaultValue />
                </label>
                <label >Age<input className="formControl" id="ageInput" name="age" placeholder required step={1} type="number" defaultValue min={18} max={99} /></label>

            </fieldset>

            <fieldset id="genStat">

                <label >Weight<input className="formControl" id="weightInput" name="weight" required step="any" type="number" defaultValue /></label>

                <label >Feet<input className="formControl" id="feetInput" name="feet" placeholder required step={1} type="number" defaultValue min={4} max={7} /></label>

                <label >Inches<input className="formControl" id="inchInput" name="inch" placeholder required step type="number" defaultValue min={0} max={11} /></label>

            </fieldset>


            <fieldset id="stats">

                <label >Hips<input className="formControl" id="hipsInput" name="hips" placeholder required step="any" type="number" defaultValue min={25} max={50} /></label>

                <label >Waist<input className="formControl" id="waistInput" name="waist" placeholder required step="any" type="number" defaultValue min={18} max={50} /></label>

                <label >Neck <input className="formControl" id="neckInput" name="neck" onsubmit="myScript" placeholder required step="any" type="number" defaultValue min={8} max={25} /></label>

            </fieldset>



        </form>

    </div>
    </div>
    );
  }
}

export default Form;