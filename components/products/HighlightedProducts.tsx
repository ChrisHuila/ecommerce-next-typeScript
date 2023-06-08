"use client";
// import ShowProduct from "./ShowProduct";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// interface
import { ProductFire } from "@/types";
import dynamic from "next/dynamic";

const ShowProduct = dynamic(() => import("./ShowProduct"), { ssr: false });

interface Props {
    products: Array<ProductFire>;
    category: string;
}

const HighlightedProducts = ({ products, category }: Props) => {
    return (
        <div className="container HighlightedProducts">
            <h2 className="">{category}</h2>
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
