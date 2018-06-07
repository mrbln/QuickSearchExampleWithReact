import React from "react";
import YTSearch from "youtube-api-search";
import _ from "lodash";

import { VideoView } from "../views/VideoView.js";

import { SearchBarView } from "../views/SearchBarView.js";

import videos from "../../../constants/videos.js";

const YT_API = "AIzaSyChy_SQAO0hMSR5L9Rz5eEb8QOIffHr8RM";

export class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      videos: [],
      selectedVideo: ""
    };

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this.searchYoutube = this.searchYoutube.bind(this);
  }

  searchYoutube() {
    const term = this.state.text.toLowerCase();
    YTSearch({ key: YT_API, term: term }, videos => {
      this.tempFunc(videos);
    });
  }

  _handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    this.searchYoutube();
  }

  tempFunc(videos) {
    const foundVideoLink =
      videos && videos.length > 0
        ? "https://www.youtube.com/embed/" + videos[1].id.videoId
        : null;

    if (foundVideoLink) {
      this.setState({
        selectedVideo: foundVideoLink
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
        <VideoView videoLink={this.state.selectedVideo} />
      </div>
    );
  }
}
