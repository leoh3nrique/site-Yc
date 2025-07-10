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
  height: 400px;

  /* Exemplo de customização das bullets de paginação */
  .swiper-pagination-bullet {
    background-color: gray;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    background-color: red;
    opacity: 1;
  }

  /* Exemplo de customização dos botões de navegação */
  .swiper-button-next,
  .swiper-button-prev {
    color: #333;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #000;
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
