"use client"
import { useContext } from 'react';
import { productsContext } from '@/context/productsContext';

// import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Categories, Product} from '@/types'
import ShowProduct from './Product';

export const revalidate = 3600; // revalidate every minute 

interface Data {
      dataall: [products: Array<Product>, categories: Array<Categories> ]   
}

const HighlightedProducts = async () => {
        const {firebase} = useContext(productsContext)
        
        const [products, categories]: Data["dataall"] = await Promise.all([
                firebase.getCollet('productos', 20),
                firebase.getCollet('categorias', 3)
        ] )
        console.log(products, categories);
        
    return (
        <>
             {categories.map( (categoria, i) => (
                <ul key={i} >
                        <h2 className="categoria-header">{categoria.nombre}</h2>
                        <Swiper                    
                        navigation={true}
                        pagination={true} 
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={4}
                      
                        >       
                                {products.map( articulo => ( articulo.categoria === categoria.id && articulo.imagen
                                ?<SwiperSlide key={articulo.id}>
                                        <ShowProduct 
                                        article={articulo}
                                        />
                                </SwiperSlide>
                                : null))}
                                      
                        </Swiper>
                </ul>
                ))}
        </>
      );
}
 
export default HighlightedProducts;