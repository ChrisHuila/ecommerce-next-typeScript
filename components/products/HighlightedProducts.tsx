"use client";
import ShowProduct from "./ShowProduct";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// interface
import { Categories, Product, ProductFire } from "@/types";

interface Props {
    products: Array<ProductFire>;
    category: string;
}

const HighlightedProducts = ({ products, category }: Props) => {
    return (
        <div className="container">
            <h2 className="categoria-header">{category}</h2>
            <Swiper
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={5}>
                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <ShowProduct article={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HighlightedProducts;
