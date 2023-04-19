import React from "react";
import { Slide } from "react-slideshow-image";
import imageOne from "../Images/Caps/BC01.png";
import imageTwo from "../Images/Caps/BC001.png";
import imageThree from "../Images/Caps/BC002.jpg";
import imageFour from "../Images/Caps/BC003.jpg";
import imageFive from "../Images/Caps/BC004.png";
import imageSix from "../Images/Caps/BC005.png";
import { Box, Image } from "@mantine/core";
import "react-slideshow-image/dist/styles.css";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  prevArrow: "",
  nextArrow: "",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "",
};

const HomePageSlideShow = () => {
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
  ];

  return (
    <div className="slide-container">
      <Slide {...proprietes}>
        {images.map((src) => {
          return (
            <Box style={{ ...divStyle }}>
              <Image width={320} fit="contain" src={src} />
            </Box>
          );
        })}
      </Slide>
    </div>
  );
};

export default HomePageSlideShow;
