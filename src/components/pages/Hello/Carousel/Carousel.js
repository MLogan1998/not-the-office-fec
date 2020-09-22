/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

import './Carousel.scss';

const items = [
  {
    src: 'https://i.imgur.com/8nUEfKq.jpg',
  },
  {
    src: 'https://i.imgur.com/bQXrSre.jpg',
  },
  {
    src: 'https://i.imgur.com/s7Sg0mE.jpg',
  },
  {
    src: 'https://i.imgur.com/9Ubce1V.jpg',
  },
  {
    src: 'https://i.imgur.com/aUpcPmg.jpg',
  },
  {
    src: 'https://i.imgur.com/A4EOuZn.jpg',
  },
];

const LpCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default LpCarousel;
