import React from "react";
import PropTypes from "prop-types";

class YoutubeEmbed extends React.Component {

  render(){
    const { embedId } = this.props;
    return(
    <div className="video-responsive">
      <iframe
        width="1000"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    );
  }
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
