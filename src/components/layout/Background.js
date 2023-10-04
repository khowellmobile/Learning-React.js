import { useState } from "react";
import { useEffect } from "react";

import imageData from "../imageData/imageData";

function Background(props) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(2);
  }, []);

  const backgroundStyle = {
    backgroundImage: "url(" + imageData[currentImage] + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    transition: "3s linear",
  };

  return (
      <div style={backgroundStyle}>{props.children}</div>
  );
}

export default Background;
