import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import './MainCarousel.css'

import WelcomeSection from './WelcomeSection/WelcomeSection';

import Slide1 from "../img/investment1.jpeg"
import Slide2 from "../img/investment2.jpg"
import Slide3 from "../img/investment3.jpg"

const Image = styled.div`
    height: 85vh;
    width: 100%;
    background-image: linear-gradient(to right, #000000 0%, #000000 25%, #00000000 90%);
`
const TextSlides = styled.div`
    height: 100px;
    width: 100%;
    color: blue;
`

export default function Main(){
    return(
        <main>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <Image>
                    <img src={Slide1} alt="" className='carouselImg'/>
                    <TextSlides> Testando </TextSlides>
                </Image>
            </SwiperSlide>
            <SwiperSlide>
                <Image>
                    <img src={Slide2} alt="" className='carouselImg'/>
                </Image>
            </SwiperSlide>
            <SwiperSlide>
                <Image>
                    <img src={Slide3} alt="" className='carouselImg'/>
                </Image>
            </SwiperSlide>
          
            </Swiper>

            <WelcomeSection />
        </main>
    )
}