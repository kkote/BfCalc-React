

import React from "react";

const Table = props => {
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
                      <th>Neck</th>
                      <th>Waist</th>
                      <th>Hip</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
              </tbody>
          </table>



      </div>


);
}

export default Table;

