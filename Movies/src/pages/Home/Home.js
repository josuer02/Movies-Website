import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroP,
  HeroH1,
} from "./HeroElements";
import React from "react";
import Video from "../../components/videos/video.mp4";

const Home = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Cinema Movies</HeroH1>
        <HeroP>Registrate para conocer descuentos especiales</HeroP>
        
        <HeroBtnWrapper></HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Home;
