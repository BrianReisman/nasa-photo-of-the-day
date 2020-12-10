import React from "react";
import StyledVisual from "./StyledVisual";

const Visual = (props) => {
  let visualAsset = [];
  if (props.theData.media_type === "video") {
    visualAsset = (
      <iframe
        title={props.theData.title}
        width="560"
        height="315"
        src={props.theData.url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  } else {
    visualAsset = <img src={props.theData.url} alt="NASA of the day." />;
  }

  return <StyledVisual>{visualAsset}</StyledVisual>;
};

export default Visual;
