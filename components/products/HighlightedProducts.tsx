"use client"
import { useContext } from 'react';
import { productsContext } from '@/context/productsContext';

import productos from '../mock/products';
import { categorias } from '../mock/products';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

export const revalidate = 3600; // revalidate every minute

const HighlightedProducts = async () => {
        const {firebase} = useContext(productsContext)

        const [products, categories] = await Promise.all([
                firebase.getCollet('productos', 20),
                firebase.getCollet('categorias', 3)
        ])
        console.log(products, categories);
        

    return (
        <>
             {categorias.map( (categoria, i) => (
                <div key={i} >
                        <h2 className="categoria-header">{categoria.nombre}</h2>
                        <Swiper                    
                        navigation={true}
                        pagination={true} 
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={4}
                      
                        >       
                                {productos.map( articulo => ( articulo.categoria === categoria.id && articulo.imagen
                                ?<SwiperSlide key={articulo.id}>
                                 <h3>{articulo.referencia}</h3>
                                </SwiperSlide>
                                : null))}
                                      
                        </Swiper>
                </div>
                ))}
        </>
      );
}
 
export default HighlightedProducts;