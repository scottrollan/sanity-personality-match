import React from "react";

const TenOptions = (props) => {
  return (
    <select
      onChange={(event) => props.changeNumberValueHandler(event)}
      required
      name={props.name}
      defaultValue={0}
    >
      <option disabled value="0">
        Select an option
      </option>
      <option value="1">1 (strongly disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10 (strongly agree)</option>
    </select>
  );
};

export default TenOptions;
