import React from 'react';
import './App.css';
import Header from "./components/header";
import CalcForm from "./components/form";
import Table from "./components/table";
import Stats from "./components/statDisplay";
import { bmiRange, findBf, findTdee } from './utils.js';
import { Container} from 'reactstrap';
import Footer from "./components/footer";

const apiURL=`${process.env.REACT_APP_URL}`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      tdeeA: "Calories",
      bmi:"",
      bmiR: "",
      bf:"",
      bfR:'Percent',
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
    // const stringdata = JSON.stringify(dataObj, null, 2);
    const newData = this.setDisplay(dataObj);
    // console.log(newData);

    this.setState({
      formitems: newData,
      statList: [...this.state.statList, newData]
    });
   
  }

  componentDidMount() {
    console.log("Did Mount");
    this.handleDataChange();
  }


  setDisplay(data) {
    console.log("setDisplay,  data");

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

    data["bf"]=bf;
    data["bmi"]=bmi;
    data["tdee"]=tdee;
    data["bmiR"]=bmiR;
 
    return(data)
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
        <br></br>
        <div className='main'>
          <hr />
          <Container className="calcAndStat">
            <CalcForm
              prevForm={this.state.statList}
              fromForm={this.state.formitems}
              handleSubmit={this.handleSubmit}
            />
            <Stats
              data={this.state.formitems}
              tdeeA={this.state.tdeeA}
              bfR={this.state.bfR}
            />
          </Container>
          <hr />
          <br></br>
          <Table className="container"
            statlist={this.state.statList} />
        </div>
         
    <Footer />  
      </div>
    );
  }
}

export default App;