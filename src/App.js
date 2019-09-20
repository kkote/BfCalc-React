import React from 'react';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Login from "./components/login";
import Form from "./components/form";
import Chart from "./components/chart";
import Table from "./components/table";
import Stats from "./components/statDisplay";
import MyForm from "./components/exampleform";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 
        [
          {
            date: "2019",
            weight: "112"
          }
    ],
      entries: [
        {
          date: "2017-07-07",
          weight: "125"
        },
        {
          date: "2018-08-08",
          weight: "130"
        },
        
      ],
      allUsers: [
        {
          username: "username",
          password: "password"
        }
      ],
      error: ""
    };
  }


  render() {

    return (
      <div className="App">
        <Header />
        {/*<Login />*/}
        <br></br>
        <div className='main'>
        <hr/>
        <Form />  
         <hr/>
        <br></br>
  
         <hr/>
         <Stats lists={this.state.data} />
         { /*} 
          <Chart />
          <Table />
    <Footer />  */}
        </div>
      </div>
          );
  }
}

export default App;