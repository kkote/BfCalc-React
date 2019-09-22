import React from 'react';
import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Stats from "./components/statDisplay";
{/*import Footer from "./components/footer";
import Login from "./components/login";
import Chart from "./components/chart";
import Table from "./components/table";
import MyForm from "./components/exampleform"; */}



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCalc: 
        [
          {
            bmi: "19.8",
            bf: "20.1",
            tdee: "1855"
          }
    ],
      entries: [
        {
          date: "2017-07-07",
          weight: "115",
          bmi: "20.3",
          bf: "21.2",
          tdee: "1855"
        },
        {
          date: "2018-08-08",
          weight: "130",
          bmi: "20",
          bf: "21",
          tdee: "1800"
        },
        
      ],
      error: "",
      data: [
        {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'}
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

    fetch(``).then(handleErrors).then(res => res.json()).then(result => {
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
        <Stats 
        lists={this.state.currentCalc} 
        books={this.state.data}
        />
         <hr/>
         
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