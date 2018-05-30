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

  searchYoutube(term) {
    YTSearch({ key: YT_API, term: term }, videos => {
      this.setState({
        videos: videos
      });
    });
  }

  /*videoSearch = _.debounce(term => {
    this.searchYoutube(term);
  }, 3000);*/

  _handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.text.toLowerCase();
    this.searchYoutube(searchTerm);
    // console.log("videos: " + this.state.videos);
    const foundVideoLink =
      this.state.videos.length > 0
        ? "https://www.youtube.com/embed/" + this.state.videos[0].id.videoId
        : null;

    if (foundVideoLink) {
      this.setState({
        selectedVideo: foundVideoLink
      });
      // console.log("foundVideoLink: " + foundVideoLink);
      // console.log("videoId: " + this.state.videos[0].id.videoId);
      // console.log("selectedVideo: " + this.state.selectedVideo);
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
