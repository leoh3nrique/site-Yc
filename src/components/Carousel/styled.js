import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const ContainerCarousel = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  position: relative;
`;



export const StyledSwiper = styled(Swiper)`
  width: 100%;
  border-radius: 10px;
  
  aspect-ratio: 16 / 9;
  max-height: 350px; /* Limita a altura máxima, tornando-o menor */

  .swiper-pagination-bullet {
    background-color: #aaa;
  }
  .swiper-pagination-bullet-active {
    background-color: #fb4121;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    --swiper-navigation-size: 14px;
  }
`;


export const StyledSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const Styledh1 = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
