import React from "react";
import _ from "lodash";

import { VideoContainer } from "./VideoContainer.js";

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
    const searchTerm = this.state.text;
    const temp = _.find(list, function(o) {
      return (
        o.artist.toLowerCase().includes(searchTerm) ||
        o.songName.toLowerCase().includes(searchTerm)
      );
    });

    if (temp) {
      this.setState({
        selectedVideo: temp.videoLink
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
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
        </form>
        <VideoContainer videoLink={this.state.selectedVideo} />
      </div>
    );
  }
}
