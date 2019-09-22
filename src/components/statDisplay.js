import React from "react";



class Stats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedProduct: {},
        list: this.props.list,
        books: this.props.books,
        error: "error"
      };
      }
  
  
    render() {

      const List = ({ lists }) => (

        Object.keys(this.props.lists).map(key => (
          <Stats
            key={key}
            item={this.props.lists[key]}
          />
        ))
      );

      const Stats = ({ item }) =>
        (
          <div className="statGroup">
            <header>
              <h4>Your Stats</h4>
            </header>
            <div className="statItem">
              <h5>Body Fat Percentage</h5>
              {item.bf}
            </div>
            <div className="statItem">
              <h5>Body Mass Index</h5>
              {item.bmi}
            </div>
            <div className="statItem">
              <h5>Total Daily Energy Expenditure</h5>
              {item.tdee}
            </div>
          </div>
        );

      const BookList = ({ lists }) => (

        Object.keys(this.props.books).map(key => (
          <Each
            key={key}
            item={this.props.books[key]}
          />
        ))
      );

      const Each = ({ item }) =>
        (
          <div className="statGroup">
            {item.id}
            {item.title}
            {item.author}
          </div>
        );


      
      return (
        <div>
          <List />
          <BookList />


        </div>
        
      );
    }
  }
  
  export default Stats;