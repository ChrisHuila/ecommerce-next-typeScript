import { useContext } from "react";
import { productsContext } from "@/context/productsContext";
import Image from "next/image";
import priceFormat from "@/services/priceFormat";
import { Product } from "@/types";

interface Props {
    product: Product;
}

const CartItem = ({ product }: Props) => {
    const { removeFromCart } = useContext(productsContext);

    const finalPrice = `$${priceFormat(parseInt(product.price))}`;

    const handleRemove = () => {
        removeFromCart(product.id);
    };
    return (
        <tr className="cartItem">
            <td>
                <Image
                    src={product?.image}
                    alt={product.name}
                    width={70}
                    height={70}
                    style={{ borderRadius: "50%" }}
                />
            </td>
            <td>
                <p>{product.name}</p>
            </td>
            <td>
                <p>{`${finalPrice}`}</p>
            </td>
            <td>
                <p>{product.quantity}</p>
            </td>

            <td>
                <button
                    className="remove-item"
                    onClick={handleRemove}>
                    &times;
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
