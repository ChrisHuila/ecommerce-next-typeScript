import Image from "next/image";
import { Product } from "@/types";
import style from '@/app/search/Search.module.css'
import ThunderIcon from "../icons/Thunder";
import { useContext } from "react";
import { productsContext } from "@/context/productsContext";
import priceFormat from "@/services/priceFormat";

interface Props {
    products: Array<Product>
}

const ProductResult = ({products}: Props) => {
    const { addCartProduct } = useContext(productsContext);

    const handleCartProduct = (product: Product) => {
        addCartProduct(product);
    };

    const discountPricefn = (product: Product) => {
        const discountOperation = Math.ceil(parseInt(product.price) * (100 / (100 - product.discount)));

         return `$${priceFormat(discountOperation)}`;
    }

    const finalPrice = (product: Product) => {
        return `$${priceFormat(parseInt(product.price))}`
    }

    return(
        <ul className={style.products}>
            {products.map((product, i) => (
                <li className={style.product} key={i}>
                    <div className={style.image_box}>
                        <Image 
                            className={style.image}
                            src={product?.image}
                            alt={product.name}
                            width={300}
                            height={180}
                            loading="lazy"
                        />
                    </div>
                    <h2 className={style.product_title}>{product.name}</h2>
            <div className="showproduct-body_container">
                <h3 className="percentage-discount">
                    {product.discount ? product.discount + "% off" : " "} Free Shipping <ThunderIcon />
                    <p
                        className="price_discount"
                        style={{ visibility: product.discount ? "initial" : "hidden" }}>
                        {discountPricefn(product)}
                    </p>
                </h3>
                <h3 className="final-price">
                    Price: <span>{finalPrice(product)}</span>
                </h3>
            </div>
            <div className="showproduct-btn_container">
                <button
                    className="showproduct-btn"
                    onClick={() => handleCartProduct(product)}>
                    Add
                </button>
            </div>
                </li>
            ))}
        </ul>
    )
}
export default ProductResult;