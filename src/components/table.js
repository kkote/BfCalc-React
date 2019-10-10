

import React from "react";


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: {},
            statlist: this.props.statlist,
            error: "error"
        };
    }


    render() {
        const StatList = ({ lists }) => (

            Object.keys(this.props.statlist).reverse().map(key => (
                <Each
                    key={key}
                    item={this.props.statlist[key]}
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
                    <td>{item.tdee}</td>
                </tr >
        );

        return (
            <div >
                <header>
                    <h4>Your Progress</h4>
                </header>
                <table className="table table-hover table-striped" id="tableId">

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Weight</th>
                            <th>Body Mass Index</th>
                            <th>Body Fat %</th>
                            <th>TDEE</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <StatList />
                    </tbody>
                </table>
                
            </div>

        );
    }
}

export default Table;