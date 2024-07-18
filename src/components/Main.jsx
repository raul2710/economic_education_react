import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import './MainCarousel.css'

import WelcomeSection from './WelcomeSection/WelcomeSection';

import Slide1 from "../img/investment1.jpeg"
import Slide2 from "../img/investment2.jpg"
import Slide3 from "../img/investment3.jpg"

const ImageContainer = styled.div`
    height: 75vh;
    width: 100%;
    position: relative;
    background-image: linear-gradient(to right, #000000 0%, #000000 25%, #00000000 90%);
`

const TextSlides = styled.div`
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 1;
    color: white;
    font-size: 2em;
    font-weight: bold;
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
                <ImageContainer>
                    <img src={Slide1} alt="" className='carouselImg'/>
                </ImageContainer>
                <TextSlides>Seu futuro financeiro começa aqui, sem custos.</TextSlides>
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer>
                    <img src={Slide2} alt="" className='carouselImg'/>
                </ImageContainer>
                <TextSlides>Transformando vidas com educação financeira gratuita.</TextSlides>
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer>
                    <img src={Slide3} alt="" className='carouselImg'/>
                </ImageContainer>
                <TextSlides> 
                    Inteligencia financeira & ferramentas para uma boa gestão    
                </TextSlides>
            </SwiperSlide>
          
            </Swiper>

            <WelcomeSection />
        </main>
    )
}