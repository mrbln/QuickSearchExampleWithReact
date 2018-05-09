import React from "react";

import { VideoContainer } from "../../VideoContainer.js";

import { SearchBarView } from "./SearchBarView.js";

import videos from "../../constants/videos.js";

export class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      selectedVideo: ""
    };

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
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
        <SearchBarView
          onChange={this._handleOnChange}
          onSubmit={this._handleOnSubmit}
        />
        <VideoContainer videoLink={this.state.selectedVideo} />
      </div>
    );
  }
}
