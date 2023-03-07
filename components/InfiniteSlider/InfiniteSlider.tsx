import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

type InfiniteSliderTypes = {
  children?: JSX.Element | JSX.Element[] | undefined;
  speed?: number;
  img_width?: number;
  go_to?: 'left' | 'rigth';
};
export const images = [
  {
    src: '/img/webp/img_2.webp',
    placeholder_src: '/img/compressed/img_2.webp',
  },
  {
    src: '/img/webp/img_3.webp',
    placeholder_src: '/img/compressed/img_3.webp',
  },
  {
    src: '/img/webp/img_4.webp',
    placeholder_src: '/img/compressed/img_4.webp',
  },
  {
    src: '/img/webp/img_5.webp',
    placeholder_src: '/img/compressed/img_5.webp',
  },
];

const InfiniteSlider = ({
  children,
  speed = 10,
  img_width = 350,
  go_to = 'left',
}: InfiniteSliderTypes) => {
  //Dividir width pantalla x cantidad de imagenes --x2?
  // Keyframes for styledComponent
  const slideToLeft = (width: number) => keyframes`{
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-${width}px * 4));
    transform: translateX(calc(-${width}px * 4));
  }
}`;
  const SlideTrack = styled.g`
    animation: ${slideToLeft(img_width)} ${speed}s linear infinite;
    display: flex;
    width: calc(${img_width}px * 8);
  `;
  const Slide = styled.g`
    width: ${img_width}px;
  `;

  return (
    <div className="slider bg-red-500 x-space-none -translate-x-4">
      <SlideTrack className={`slide-track h-[25vh]`}>
        {images &&
          images.map((image, i) => (
            <Slide key={i} className="slide relative">
              <Image
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                src={image?.src}
                alt="Image Alt"
                fill
                blurDataURL={image?.placeholder_src}
                placeholder="blur"
              />
            </Slide>
          ))}
        {images &&
          images.map((image, i) => (
            <Slide key={i} className="slide relative">
              <Image
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                src={image?.src}
                alt="Image Alt"
                fill
                blurDataURL={image?.placeholder_src}
                placeholder="blur"
              />
            </Slide>
          ))}
      </SlideTrack>
    </div>
  );
};

export default InfiniteSlider;
