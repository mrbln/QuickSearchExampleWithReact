import React from "react";

export class VideoView extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="musicVideo"
          width="500"
          height="350"
          src={this.props.videoLink}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen="true"
        />
      </div>
    );
  }
}
