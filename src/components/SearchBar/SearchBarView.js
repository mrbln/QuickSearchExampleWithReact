import React from "react";

import { VideoContainer } from "../../VideoContainer.js";

import videos from "../../constants/videos.js";

export class SearchBarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      selectedVideo: ""
    };

    this._handleOnChange = this._handleOnChange.bind(this);
  }

  _handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.text.toLowerCase();
    const foundVideoLink = _.find(videos.list, function(listItem) {
      return (
        listItem.artist.toLowerCase().includes(searchTerm) ||
        listItem.songName.toLowerCase().includes(searchTerm)
      );
    });

    if (foundVideoLink) {
      this.setState({
        selectedVideo: foundVideoLink.videoLink
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleOnSubmit.bind(this)}>
          <label>
            Name:
            <input
              type="text"
              name="SearchBar"
              value={this.state.text}
              onChange={this._handleOnChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <VideoContainer videoLink={this.state.selectedVideo} />
      </div>
    );
  }
}
