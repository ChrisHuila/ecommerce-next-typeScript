"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Covers from './Covers';

const banner = [
  { img: 'https://user-images.githubusercontent.com/99347883/226123794-5b9e0b5a-c533-4af4-ac26-4676dea8ffaf.jpg' },
  { img: 'https://user-images.githubusercontent.com/99347883/226123795-3db1ec2d-7d2a-4dd6-8215-51a20ae71812.jpg' },
  { img: 'https://user-images.githubusercontent.com/99347883/226123798-04a19054-4ca0-4315-a536-e75b35f1399c.jpg' },
  { img: 'https://user-images.githubusercontent.com/99347883/226123803-8cb76095-cadd-4342-995c-2665adafad4a.jpg' }
]

const Banner = () => {
    return (
          <div>
             <Swiper                    
                pagination={true} 
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1}
                
            >       
                   {banner.map((portada, i) => (
                        <SwiperSlide key={i}>
                        <Covers 
                            cover={portada.img}
                        />
                        </SwiperSlide>
                   ))}
                                         
            </Swiper>
        </div>
      );
}
 
export default Banner;