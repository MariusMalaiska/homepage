import React from "react";
import "./index.scss";
import backgroundVideo from "../../styles/media/video.mp4";

function Background({ children }) {
  let classes = "Background";

  return (
    <div className="contain">
      <div className="video">
        {children}
        <video autoPlay="autoplay" loop="loop" muted className={`${classes}`}>
          <source src={backgroundVideo} type="video/mp4" />
          {/* Video by Ruvim Miksanskiy from Pexels */}
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
}

export default Background;
