import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <label>
          Name:
          <input
            type="text"
            name="SearchBar"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}
