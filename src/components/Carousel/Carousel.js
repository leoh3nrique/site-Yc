import React from "react";
import {
  SwiperContainer,
  StyledSwiper,
  StyledSlide,
  Styledh1,
  ContainerCarousel,
} from "./styled";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({
  images = [],
  title = "",
  slidesPerView = 1,
  spaceBetween = 10,
  navigation = true,
  pagination = { clickable: true },
  loop = true,
  modules = [Navigation, Pagination],
  ...swiperProps
}) => {
  return (
    <ContainerCarousel>
      {title && <Styledh1>{title}</Styledh1>}
      <SwiperContainer>
        <StyledSwiper
          modules={modules}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          navigation={navigation}
          pagination={pagination}
          loop={loop}
          {...swiperProps} // Ex: loop, autoplay, breakpoints etc.
        >
          {images.map((img, index) => (
            <StyledSlide key={index}>
              {/* Se o array for de strings, use diretamente o valor. 
                  Se for de objetos { src, alt }, ajuste conforme abaixo. */}
              <img
                src={typeof img === "string" ? img : img.src}
                alt={img.alt || `Slide ${index + 1}`}
              />
            </StyledSlide>
          ))}
        </StyledSwiper>
      </SwiperContainer>
    </ContainerCarousel>
  );
};

export default Carousel;
