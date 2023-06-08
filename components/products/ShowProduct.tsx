import priceFormat from "@/services/priceFormat";
import Image from "next/image";
import { ProductFire } from "@/types";
import ThunderIcon from "../icons/Thunder";

interface Props {
    article: ProductFire;
}

const ShowProduct = ({ article }: Props) => {
    const discountOperation = Math.ceil(
        parseInt(article.price) * (100 / (100 - article.discount))
    );

    const discountPrice = `$${priceFormat(discountOperation)}`;

    const finalPrice = `$${priceFormat(parseInt(article.price))}`;

    return (
        <div className="showproduct-container">
            <div className="showproduct-img_container">
                <Image
                    style={{ maxWidth: "100%" }}
                    src={article?.image}
                    alt={article.name}
                    width={232}
                    height={160}
                    priority={true}
                />
            </div>
            <h2 className="showproduct-title">{article.name}</h2>

            <div className="showproduct-body_container">
                <h3 className="percentage-discount">
                    {article.discount ? article.discount + "% off" : " "} Free Shipping{" "}
                    <ThunderIcon />
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
                <button className="showproduct-btn">Add</button>
            </div>
        </div>
    );
};

export default ShowProduct;
