"use client";
import dynamic from "next/dynamic";
import useSwiper from "@/hooks/useSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// interface
import { ProductFire } from "@/types";

const ShowProduct = dynamic(() => import("./ShowProduct"), { ssr: false });

interface Props {
    products: Array<ProductFire>;
    category: string;
}

const HighlightedProducts = ({ products, category }: Props) => {
    const { numberSwiper } = useSwiper();

    return (
        <div className="container HighlightedProducts">
            <h2 className="HighlightedProducts-category">{category}</h2>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={numberSwiper()}>
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
