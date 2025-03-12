import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "./PastTransictions.modules.scss";
const arr = [
  {
    name: "last transiction",
    url: "./src/assets/images/transiction.png",
    urlX2: "./src/assets/images/transiction-2x.png",
    urlX3: "./src/assets/images/transiction-3x.png",
  },
  {
    name: "last transiction",
    url: "./src/assets/images/transiction.png",
    urlX2: "./src/assets/images/transiction-2x.png",
    urlX3: "./src/assets/images/transiction-3x.png",
  },
  {
    name: "last transiction",
    url: "./src/assets/images/transiction.png",
    urlX2: "./src/assets/images/transiction-2x.png",
    urlX3: "./src/assets/images/transiction-3x.png",
  },
  {
    name: "last transiction",
    url: "./src/assets/images/transiction.png",
    urlX2: "./src/assets/images/transiction-2x.png",
    urlX3: "./src/assets/images/transiction-3x.png",
  },
  {
    name: "last transiction",
    url: "./src/assets/images/transiction.png",
    urlX2: "./src/assets/images/transiction-2x.png",
    urlX3: "./src/assets/images/transiction-3x.png",
  },
];
export const Carousel = () => {
  return (
    <Swiper
      className="carousel"
      modules={[Scrollbar]}
      spaceBetween={8}
      slidesPerView={1.3}
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2.2,
        },
        1281: {
          slidesPerView: 4.2,
        },
      }}
    >
      {arr.map((elem) => (
        <SwiperSlide>
          <picture>
            <source
              srcset={`${elem.url} 1x, ${elem.urlX2}  2x,${elem.urlX3} 3x`}
              type="image/png"
            />
            <img
              className="past-transactions__image"
              src={elem.url}
              alt={elem.name}
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
