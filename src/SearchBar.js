import React from "react";

export class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}
