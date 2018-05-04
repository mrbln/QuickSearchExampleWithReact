import React from "react";
import _ from "lodash";

import { VideoContainer } from "./VideoContainer.js";
import { FormView } from "./FormView.js";

import videos from "./constants/videos.js";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      selectedVideo: ""
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleOnSubmit(e) {
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
        <FormView
          text={this.state.text}
          onSubmit={this.handleOnSubmit}
          onChange={this.handleOnChange}
        />
        <VideoContainer videoLink={this.state.selectedVideo} />
      </div>
    );
  }
}
