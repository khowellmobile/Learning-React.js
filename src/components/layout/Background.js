import { useState } from "react";
import { useEffect } from "react";

import imageData from "../imageData/imageData";

function Background(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentImage(0);
  }, []);

  const backgroundStyle1 = {
    backgroundImage: "url(" + imageData[currentImage + 1] + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    transition: "3s linear",
  };

  const backgroundStyle2 = {
    backgroundImage: "url(" + imageData[currentImage] + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    transition: "3s linear",
  };

  return (
    <div style={backgroundStyle1}>
      <div style={backgroundStyle2}>{props.children}</div>
    </div>
  );
}

export default Background;
