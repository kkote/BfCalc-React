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
    console.log(data)
    const stringdata = stringifyFormData(data);
    console.log(stringdata)
    const datadata = JSON.parse(stringdata);    
    console.log(datadata)
    const dataone = datadata.age;    
    console.log(dataone)
    const bmi = ((datadata.weight / 3969) * 703).toPrecision(3);
    
    this.setState({
      res: stringdata,
      data: datadata,
      one: datadata.age*datadata.weight,
      bmi: bmi,
    });
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  render() {
    return (
        <div>
          <header>
            <h4>Your Measurements</h4>
        </header>
        <hr></hr>
        <br></br>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="female">Female</label>
          <input id="female" name="gender" type="radio" defaultValue={'female'} selected/>
          <label htmlFor="male">Male</label>
          <input id="male" name="gender" type="radio" defaultValue={'male'}/>
          <br></br>


         {/* <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" />  */}

          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" defaultValue={28}/>

          <label htmlFor="weight">Weight</label>
          <input id="weight" name="weight" type="number" defaultValue={115} />

          <br></br>
          <label htmlFor="feet">Feet</label>
          <input id="feet" name="feet" type="number" defaultValue={5}/>

          <label htmlFor="inches">Inches</label>
          <input id="inches" name="inches" type="number" defaultValue={3} />

          <br></br>

          <label htmlFor="hips">Hips</label>
          <input id="hips" name="hips" type="number" defaultValue={34}/>

          <label htmlFor="waist">Waist</label>
          <input id="waist" name="waist" type="number" defaultValue={25}/>

          <label htmlFor="neck">Neck</label>
          <input id="neck" name="neck" type="number" defaultValue={12}/>

          <br></br>


          <label htmlFor="none">None</label>
          <input id="none" name="activity" type="radio" defaultValue={1.2}/>
          <label htmlFor="normal">Normal</label>
          <input id="normal" name="activity" type="radio" defaultValue={1.55}/>
          <br></br>

          <button>Send </button>
        </form>
        
        {this.state.res && (
            <div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
            </div>
        )}
        {this.state.bmi && (
             <div className="res-block">
             <h3>Data one:</h3>
             <pre>bmi {this.state.bmi} </pre>
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