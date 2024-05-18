import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Container, Header, Segment } from "semantic-ui-react";
import { Image } from 'semantic-ui-react';

const SliderCarousel = () => {
  return (
    <Container>
      <Segment>
        <Header as="h2"> My Carousel</Header>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={40}
          totalSlides={3}
        >
          <Slider>
            {/* <Slide index={0}>I am the first Slide.</Slide> */}
             <Slide index={0}>
                <Image src = ".\Slid1.jpg" alt="Slide 1" fluid/>
            </Slide> 
             <Slide index={1}>
                <Image src = ".\Slid2.jpg" alt="Slide 2" fluid/>
            </Slide> 
            {/* <Slide index={1}>I am the second Slide.</Slide> */}
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </Segment>
    </Container>
  );
};
export default SliderCarousel;