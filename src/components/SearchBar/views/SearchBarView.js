import React from "react";

export class SearchBarView extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
  }

  _handleOnChange(e) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e);
    }
  }

  _handleOnSubmit(e) {
    const { onSubmit } = this.props;
    e.preventDefault();

    if (onSubmit) {
      onSubmit(e);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleOnSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="SearchBar"
              onChange={this._handleOnChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
