import { useState, useEffect } from "react";
import { Notice } from "../Notice-component/Notice.component";
import "./slider.style.css";
const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../../../public/img/5bac1ede714b564981dcea48_48453_826360_original.jpg",
    "../../../public/img/Floor-Plan-7-Moraj-Residency-Navi-Mumbai-5038665_661_1024.jpg",
    "../../../public/img/Project-Photo-5-Moraj-Residency-Navi-Mumbai-5038665_480_1366.jpg",
  ]; // Replace with your own image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change the duration (in milliseconds) between image transitions

    return () => clearInterval(interval);
  }, [images.length]);

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAnimation: "left_to_right",
    height: "92vh",
    width: "100%",
  };

  return (
    <div>
      <div className="background" style={backgroundStyle} />
      <div className="title">
        <span className="heading"> Housing society</span>
      </div>
      <div className="notice-position">
        <Notice />
      </div>
    </div>
  );
};

export default BackgroundSlider;
