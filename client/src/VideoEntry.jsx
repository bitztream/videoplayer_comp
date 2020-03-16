/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';

const VideoEntry = (props) => (
  <figure>
    <video className="video" width="100%" height="auto" controls>
      <source src={props.video[0].videos[0].video_url} />
    </video>
  </figure>
);

export default VideoEntry;
