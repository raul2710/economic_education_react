import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";


// images
// import investment1 from "../../img/investment1.jpeg";
// import investment2 from "../../img/investment2.jpg";
// import investment3 from "../../img/investment3.jpg";



// const images = [
//     {id: 1 , src: investment1},
//     {id: 2, src: investment2},
//     {id: 3, src: investment3}
// ]

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: auto;
`

const Slider = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    width: 100vw;
    height: max-content;
`


export default function Carrousel(){
    return(
        <Slider>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable:true }}
                navigation
                className="Swiper"
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id} className="swiperSlide">
                        <Image
                            src={image.src}
                            alt="slider"
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Slider>
    )
}