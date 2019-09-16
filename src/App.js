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

function App() {
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
       { /*} <Stats />
        <Chart />
        <Table />

  <Footer />  */}
      </div>


    </div>
        );
            }
            
            export default App;
