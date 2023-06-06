"use client"
import ShowProduct from './ShowProduct';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
// interface
import {Categories, Product} from '@/types'

interface Props {
    categories: Array<Categories>
    products: Array<Product>
}

const HighlightedProducts =({categories, products}: Props) => {
    // const {firebase} = useContext(productsContext)
    
    console.log(products, categories);
        
    return (
        <>
            {categories.map( (categoria, i) => (
                <div key={i} >
                    <h2 className="categoria-header">{categoria.nombre}</h2>
                    <Swiper                    
                    navigation={true}
                    pagination={true} 
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    >       
                        {products.map( articulo => ( articulo.categoria === categoria.id && articulo.imagen
                        ?<SwiperSlide key={articulo.id}>
                                <ShowProduct 
                                article={articulo}
                                />
                        </SwiperSlide>
                        : null))}
                    </Swiper>
                </div>
            ))}
        </>
      );
}
 
export default HighlightedProducts;