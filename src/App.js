import React from 'react';
import './App.css';
import Header from "./components/header";
import CalcForm from "./components/form";
import Table from "./components/table";
import List from './components/list';
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
      statList: [],
      form: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state.formitems);
    console.log(this.state.statList);
    const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data);
    // console.log('daraObj');
    // console.log(dataObj);
    const stringdata = JSON.stringify(dataObj, null, 2);
    // console.log('stringdata');
    // console.log(stringdata);

    this.setState({
      formitems: dataObj,
      statList: [...this.state.statList, this.state.formitems]
    });
  }


  componentDidMount() {
    console.log("Did Mount");
    this.handleDataChange();
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
          prevForm={this.state.list}
          handleSubmit={this.handleSubmit}
           />
          <hr />
          <br></br>

         {/*}  <Table
            statlist={this.state.list} />
            <Stats
            bmi={data[0].bmi}
            bf={stat[0].bf}
            tdee={stat[0].tdee}
          /> 
          <Chart />
    <Footer />  */}
     
        </div>
      </div>
    );
  }
}

export default App;