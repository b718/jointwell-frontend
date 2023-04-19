import React from "react";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import imageOne from "../Images/Caps/BC01.png";
import imageTwo from "../Images/Caps/BC001.png";
import imageThree from "../Images/Caps/BC002.jpg";
import imageFour from "../Images/Caps/BC003.jpg";
import imageFive from "../Images/Caps/BC004.png";
import imageSix from "../Images/Caps/BC005.png";
import { Box, Image } from "@mantine/core";
import "react-slideshow-image/dist/styles.css";

const props = {
  duration: 2000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  prevArrow: <div></div>,
  nextArrow: <div></div>,
};
//scale={1.4} for Zoom

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
    <>
      <Slide {...props}>
        {images.map((src) => {
          return (
            <Box>
              <Image fit="contain" src={src} />
            </Box>
          );
        })}
      </Slide>
    </>
  );
};

export default HomePageSlideShow;
