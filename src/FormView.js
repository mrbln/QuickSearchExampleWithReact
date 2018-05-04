import React from "react";

export class FormView extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
  }

  _handleOnChange(value) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }
  }

  _handleOnSubmit(value) {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit(value);
    }
  }

  render() {
    return (
      <form onSubmit={this._handleOnSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="SearchBar"
            value={this.props.text}
            onChange={this._handleOnChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
