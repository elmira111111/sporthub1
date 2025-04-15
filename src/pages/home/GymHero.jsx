import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./GymHero.css";
import Sports from "../../sports/Sports";
import Reklama from "../../reklama/Reklama";
import { div } from "framer-motion/client";
import '@fontsource/orelega-one'
const GymHero = () => {
  return (
    <div>

    <div className="gym-hero">
      
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="gym-swiper"
      >
        <SwiperSlide>
          <div className="slide-content background-slide">
            <div className="overlay" />
            <div className="text-side">
              <p className="phone">+996 700-72-77-45</p>
              <h1 className="title">
                БЕРЕМ НАГРУЗКУ
                <br /> НА СЕБЯ
              </h1>
              <button className="credit-btn">РАССРОЧКА 6/9/12 МЕСЯЦЕВ</button>
              <ul className="features">
                <li>Тренажерный зал</li>
                <li>Тренажерный зал</li>
                <li>Работаем 24/7</li>
              </ul>
              <p className="location">г. Батайск, М. Горького, д. 84</p>
              <a
                className="instagram"
                href="https://www.instagram.com/fitness.levelup/"
              >
                Мы в инстаграмм
              </a>
            </div>
          </div>
          <button className="watch-btn">Смотреть все</button>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </SwiperSlide>
      </Swiper>
          </div>
          <Sports/>
    </div>
  );
};

export default GymHero;
