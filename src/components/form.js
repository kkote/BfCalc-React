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
        <div className="calcForm">
          <header>
            <h4>Your Measurements</h4>
        </header>
        <hr></hr>
        <br></br>
        <form onSubmit={this.handleSubmit}>

        
          
    
          <div className="inputRow">

           {/*} <div>
           <label>Activity Level</label>
            <fieldset >
            <div >
            <input id="female" name="gender" type="radio" value={'female'} />
            <label htmlFor="female">F</label>
            </div>
            <div>
            <input id="male" name="gender" type="radio" value={'male'} required/>
            <label htmlFor="male">M</label>
            </div>
          </fieldset>
    </div> */}
           
          <div className="height-group">
            <div >
            <label htmlFor="date">Date  </label>
              <input id="date" name="date" type="date" defaultValue={12-12-17} required/>
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input id="age" name="age" type="number" defaultValue={28} required/>
            </div>

          </div>
         
            
          </div>
          
          <div className="inputRow">
          <div className='height-group'>
              <div>
                <label htmlFor="feet">Feet</label>
                <input id="feet" name="feet" type="number" defaultValue={5} placeholder='Feet' required/>
              </div>
               <div>
                <label htmlFor="inches">Inches</label>
                <input id="inches" name="inches" type="number" defaultValue={3} placeholder='Inches' required/>
              </div>
            </div>

            <div>
            <label htmlFor="weight">Weight</label>
            <input id="weight" name="weight" type="number" defaultValue={115} required/>
            </div>
            
          
          </div>
        

          <div className="inputRow"> 
          <div>
          <label htmlFor="hips">Hips</label>
            <input id="hips" name="hips" type="number" defaultValue={34} required/>

          </div>
          <div>
          <label htmlFor="waist">Waist</label>
            <input id="waist" name="waist" type="number" defaultValue={25} required/>

          </div>
          <div>
          <label htmlFor="neck">Neck</label>
            <input id="neck" name="neck" type="number" defaultValue={12} required/>

          </div>
            
           
         
          </div>

          <div >
  {/*<h5>Activity Level</h5> */}
            <label>Activity Level</label>
          <fieldset className="inputRow">
            
            <div>
            <input id="none" name="activity" type="radio" value={1.2} required/> 
              <label htmlFor="none">None</label>
            </div>

            <div>
            <input id="light" name="activity" type="radio" value={1.375} required/>
            <label htmlFor="light">Light</label>
            
            </div>
           <div>
           <input id="normal" name="activity" type="radio" value={1.55} required/>
           <label htmlFor="normal">Normal</label>
           
           </div>

           <div>
           <input id="extra" name="activity" type="radio" value={1.725} required/>
           <label htmlFor="extra">Extra</label>
           
           </div>

            <div>
            <input id="heavy" name="activity" type="radio" value={1.9} required/>
            <label htmlFor="heavy">Heavy</label>
           
           </div>
            
            
           
            
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