import React from 'react';
import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Stats from "./components/statDisplay";
import Table from "./components/table";
{/*import Footer from "./components/footer";
import Login from "./components/login";
import Chart from "./components/chart";
import MyForm from "./components/exampleform"; */}


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
      data: [
        {
          'id': 1,
          'date': 'MonthYear',
          'bmi': '00',
          'bf': '00',
          'weight': '00'
        }
      ],
    };
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

    fetch(`https://8qkziweyo4.execute-api.us-west-2.amazonaws.com/dev/api/user/stats`).then(handleErrors).then(res => res.json()).then(result => {
      console.log(result)

      var resulttext = result.items;
      this.setState({data: result, isLoaded: true, error: ""});
    }, error => {
      this.setState({error: "Please input valid search..."});
    });
  }


  componentDidMount() {
    console.log("Did Mount");

    this.handleDataChange();
  }


  render() {

    const { stat, data } = this.state;

    return (
      <div className="App">
        <Header />
        {/*<Login />*/}
        <br></br>
        <div className='main'>
          <hr />
          <Form />
          <hr />
          <br></br>
         {/*} <Stats
            bmi={data[0].bmi}
            bf={stat[0].bf}
            tdee={stat[0].tdee}
          /> /*}
          <hr />
          <Table
            statlist={this.state.data}
          />

          { /*} 
          <Chart />
    <Footer />  */}
        </div>
      </div>
    );
  }
}

export default App;