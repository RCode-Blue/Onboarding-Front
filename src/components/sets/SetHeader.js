import React from 'react';

const SetHeader = ({set}) => {
  const { description, start_date, city } = set;
  return(
    <div className="card-title"
      style={{"paddingTop": "10px"}}>
      <div className="row deep-orange darken-4"
        style={{color: "white"}}>
        <table>
          <tbody>
            <tr>
              <td>{ description }</td>
            </tr>
            <tr>
              <td>Start Date: { start_date}</td>
              <td></td>
              <td>City: {city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SetHeader;