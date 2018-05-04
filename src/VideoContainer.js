import React from "react";

export class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <iframe
          width="500"
          height="350"
          src={this.props.videoLink}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
}
