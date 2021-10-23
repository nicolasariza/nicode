import Layout from '../components/Layout';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import Link from 'next/link';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Index = () => (
  <Layout>
    <h1>Home</h1>
    <div className="">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <p className="card-text">
                Contenido acerca de css y algunas recomendaciones.
              </p>
              <Link href="/blog/css">
                <button type="button" className="btn btn-primary">
                  CSS
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Node</h5>
              <p className="card-text">
                Node y sus caracteristicas principales.
              </p>
              <Link href="/blog/node">
                <button type="button" className="btn btn-primary">
                  NODE
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
              <p className="card-text">
                Guía Javascript
              </p>
              <Link href="/blog/javascript">
                <button type="button" className="btn btn-primary">
                  Javascript
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </Layout>
);

export default Index;