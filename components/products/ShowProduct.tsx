import priceFormat from "@/services/priceFormat";
import Image from "next/image";
import { Product } from "@/types";
import ThunderIcon from "../icons/Thunder";
import { productsContext } from "@/context/productsContext";
import { useContext } from "react";

interface Props {
    article: Product;
}

const ShowProduct = ({ article }: Props) => {
    const { addCartProduct } = useContext(productsContext);

    const handleCartProduct = () => {
        addCartProduct(article);
    };

    const discountOperation = Math.ceil(parseInt(article.price) * (100 / (100 - article.discount)));

    const discountPrice = `$${priceFormat(discountOperation)}`;

    const finalPrice = `$${priceFormat(parseInt(article.price))}`;

    return (
        <div className="showproduct-container">
            <Image
                style={{ maxWidth: "100%" }}
                src={article?.image}
                alt={article.name}
                width={232}
                height={160}
                loading="lazy"
                className="skeleton"
                onLoad={(e) => (e.target as Element).classList.remove('skeleton')}
            />
            <h2 className="showproduct-title">{article.name}</h2>

            <div className="showproduct-body_container">
                <h3 className="percentage-discount">
                    {article.discount ? article.discount + "% off" : " "} Free Shipping <ThunderIcon />
                    <p
                        className="price_discount"
                        style={{ visibility: article.discount ? "initial" : "hidden" }}>
                        {discountPrice}
                    </p>
                </h3>
                <h3 className="final-price">
                    Price: <span>{finalPrice}</span>
                </h3>
            </div>
            <div className="showproduct-btn_container">
                <button
                    className="showproduct-btn"
                    onClick={handleCartProduct}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default ShowProduct;
