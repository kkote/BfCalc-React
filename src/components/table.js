

import React from "react";


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: {},
            books: this.props.books,
            error: "error"
        };
    }


    render() {
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
                < tr >
                    <td>{item.date}</td>
                    <td>{item.weight}</td>
                    <td>{item.bmi}</td>
                    <td>{item.bf}</td>
                </tr >
        );

        return (
            <div>
                <header>
                    <h4>Your Progress</h4>
                </header>
                <table className="table table-hover table-striped" id="tableId">

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Weight</th>
                            <th>BF %</th>
                            <th>BMI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BookList />
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;