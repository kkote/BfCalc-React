import React from "react";

class Form extends React.Component {
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
    const heightInche = ((dataP.feet * 12)+(dataP.inches * 1));
    
    const bmi = ((dataP.weight / 3969) * 703).toPrecision(3);
    console.log(bmi)
    
    this.setState({
      res: stringdata,
      data: dataP,
      one: dataP.age*dataP.weight,
      bmi: bmi,
      heightInches: heightInche
    });
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  render() {
    return (
        <div className="calcForm">
          <header>
            <h4>Your Measurements</h4>
        </header>
        <hr></hr>
        <br></br>
        <form onSubmit={this.handleSubmit}>

          <div className="inputRow">

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
          </div>


          <div className="inputRow basicsRow basicsRowCombo">

            <label htmlFor="age">Age
             <input id="age" name="age" type="number" defaultValue={28} min="18" max="99" required />
            </label>
          </div>

          <div className="inputRow basicsRow basicsRowCombo">

            <label htmlFor="weight">Weight
             <input id="weight" name="weight" type="number" defaultValue={115} min="85" max="600" required />
            </label>

          </div>

          <label className="inputRow basicsRow heightLabel"> Height
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
          </div>


          <div className="inputRow basicsRow">

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
        </form>


        {this.state.res && (
            <div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
            </div>
        )}
          {this.state.heightInches && (
            <div className="res-block">
            <h3>heightInches:</h3>
            <pre>{this.state.heightInches}</pre>
            </div>
        )}
       
        </div>
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

export default Form;