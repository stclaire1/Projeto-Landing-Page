import React from 'react';
import './Carrossel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import imgSobre1 from '../../../assets/img/imgSobre1.png';
import imgSobre2 from '../../../assets/img/imgSobre2.png';
import imgSobre3 from '../../../assets/img/imgSobre3.png';
import 'swiper/swiper-bundle.css';

function Carrossel() {
    const imagens = [
        { src: imgSobre1, alt: 'Slide 1', key: 'img1' },
        { src: imgSobre2, alt: 'Slide 2', key: 'img2' },
        { src: imgSobre3, alt: 'Slide 3', key: 'img3' }
    ];

    return (
        <Swiper
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {imagens.map((imagem) => (
                <SwiperSlide key={imagem.key} className='carrosselSobreNos'>
                    <div className='carrosselImg'>
                        <img src={imagem.src} alt={imagem.alt}/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carrossel;