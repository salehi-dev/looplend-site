import React from "react";

export default function ImageProvider({ imageSource, alt }) {
  return (
    <img
      src={imageSource}
      alt={alt}
      style={{ width: "80%", height: "300px" }}
    />
  );
}
