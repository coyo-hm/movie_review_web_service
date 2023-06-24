import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SliderWrapper = styled.section`
  img {
    width: 100%;
    //max-height: calc(100vh - ${(props) => props.theme.layout.headerHeight});
    overflow: hidden;
  }
`;

const SliderTitle = styled.header`
  font-size: 2rem;
  color: white;
  mix-blend-mode: difference;
`;

const SliderOverview = styled.p`
  font-size: 1rem;
  width: 90%;
  color: rgba(255, 255, 255, 0.4);
  mix-blend-mode: difference;
  line-height: 1.5rem;
  margin-bottom: 20px;
  word-break: keep-all;
  white-space: pre-wrap;
`;

export interface SliderComponent {
  imgSrc: string;
  title: string;
  overview: string;
}

interface IProps {
  sliderComponent: SliderComponent[];
}
const Carousel = ({ sliderComponent }: IProps) => {
  const [showIdx, setShowIdx] = useState(0);
  const sliderLength = sliderComponent.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setShowIdx((prev) => (prev + 1) % sliderLength);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [sliderLength]);

  return (
    <CarouselWrapper>
      {sliderComponent.map(({ imgSrc, title, overview }, index) => (
        <SliderWrapper key={index}>
          <img src={imgSrc} alt={title} />
          <SliderTitle>{title}</SliderTitle>
          <SliderOverview>{overview}</SliderOverview>
        </SliderWrapper>
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
