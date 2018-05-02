import React from "react";

export class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/FxbzRzc_xbQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
}
