import React from 'react';
import './App.css';
import Header from "./components/header";
import CalcForm from "./components/form";
import Table from "./components/table";
import Stats from "./components/statDisplay";
import List from './components/list';
import { bmiRange, findBf, findTdee } from './utils.js';
{/*import Footer from "./components/footer";

import Login from "./components/login";
import Chart from "./components/chart";
import MyForm from "./components/exampleform"; */}
const apiURL=`${process.env.REACT_APP_URL}`
// console.log(process.env.REACT_APP_URL)
console.log(apiURL)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stat:
        [
          {
            bmi: 19.8,
            bf: 20.1,
            tdee: 1855
          }
        ],
      error: "",
      list: [
        {
          'id': 1,
          'date': 'MonthYear',
          'bmi': '00',
          'bf': '00',
          'weight': '00'
        }
      ],
      formitems: '',
      statList: [   {
        'id': 1,
        'date': 'MonthYear',
        'bmi': '23',
        'bf': '21',
        'weight': '125',
        'tdee': '1800'
      }],
      form: "",
      tdee:"",
      tdeeA: "About TDEE",
      bmi:"",
      bmiR: "",
      bf:"",
      bfR:'BF Range',
      error: "error"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }


  handleDataChange() {
    function handleErrors(response) {
      if (!response.ok) {
        console.log("Error!!!!");
        throw Error(response.statusText);
      }
      console.log("okay");
      return response;
    }

    fetch(`${apiURL}dev/api/user/stats`).then(handleErrors).then(res => res.json()).then(result => {
      // console.log(result);
      // console.log(result[0]);

      var resulttext = result.items;
      this.setState({list: result, isLoaded: true, error: ""});
    }, error => {
      this.setState({error: "Please input valid search..."});
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data);
    const stringdata = JSON.stringify(dataObj, null, 2);
    // console.log('stringdata');
    // console.log(stringdata);

    this.setState({
      formitems: dataObj,
      statList: [...this.state.statList, dataObj]
    });
   
  }


  componentDidMount() {
    console.log("Did Mount");
    this.handleDataChange();
  }



  setDisplay() {
    const data = this.state.formitems;
    console.log("setDisplay,  data");
    console.log(data)

    let {gender, age, feet, inches, waist, weight, neck, hips, activity} = data;
    waist = parseInt(waist);
    neck = parseInt(neck);
    hips = parseInt(hips);
    inches = parseInt(inches);
    let height = ((feet * 12) + inches);
   
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

    return (
      <div className="App">
        <Header />
        {/*<Login />*/}
        <br></br>
        <div className='main'>
          <hr />
          <CalcForm
          prevForm={this.state.statList}
          fromForm={this.state.formitems}
          handleSubmit={this.handleSubmit}
           />
            <Stats
          data={this.state.formitems}
        /> 
          <hr />
          <br></br>
         <Table
            statlist={this.state.statList} />  

          </div>

         {/*}  
            <Stats
            bmi={data[0].bmi}
            bf={stat[0].bf}
            tdee={stat[0].tdee}
          /> 
          <Chart />
    <Footer />  */}
     
        </div>
    );
  }
}

export default App;