import React from "react";
import _ from "lodash";

import { VideoContainer } from "./VideoContainer.js";
import { FormView } from "./FormView.js";

const list = [
  {
    artist: "Dio",
    songName: "Naked in the Rain",
    videoLink: "https://www.youtube.com/embed/6maBpB9wBDA"
  },
  {
    artist: "Metallica",
    songName: "Nothing Else Matters",
    videoLink:
      "https://www.youtube.com/embed/tAGnKpE4NCI?list=PLXIdhrTXbAT2e5YIvo55jcQtNjgdFHYe_"
  },
  {
    artist: "Slayer",
    songName: "Raining Blood",
    videoLink: "https://www.youtube.com/embed/z8ZqFlw6hYg"
  }
];

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
    const foundVideoLink = _.find(list, function(listItem) {
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
