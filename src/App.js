import React from 'react';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Login from "./components/login";
import Form from "./components/form";
import Chart from "./components/chart";
import Table from "./components/table";
import Stats from "./components/statDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />

      <div className='main'>

        <Form />
        <Stats />
        <Chart />
        <Table />

        <Footer />
      </div>


    </div>
        );
            }
            
            export default App;
