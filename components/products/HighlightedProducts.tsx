"use client";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// interface
import { Product } from "@/types";

const ShowProduct = dynamic(() => import("./ShowProduct"), { ssr: false });

interface Props {
    products: Array<Product>;
    category: string;
}

const HighlightedProducts = ({ products, category }: Props) => {
    const productResponsive = {
        570: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        621: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    };
    return (
        <div className="container HighlightedProducts">
            <h2 className="HighlightedProducts-category">{category}</h2>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={productResponsive}
            >
                {products?.map(product => (
                    <SwiperSlide key={product.id}>
                        <ShowProduct article={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HighlightedProducts;
