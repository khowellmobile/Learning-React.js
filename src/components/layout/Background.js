import { useState } from "react";
import { useEffect } from "react";

import imageData from "../imageData/imageData";

function Background(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const milliseconds = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % imageData.length); 
    }, milliseconds);
  
    return () => clearInterval(interval);
  }, [currentImage])

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
