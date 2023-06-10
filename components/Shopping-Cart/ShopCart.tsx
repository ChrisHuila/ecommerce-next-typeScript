import ShopCartIcon from "../icons/cart-icon";
import CartMenu from "./CartMenu";

const ShopCart = () => {
    return (
        <ul>
            <li className="shopCart">
                <ShopCartIcon />
                {/* TO DO CONDICIONAL BADGE */}
                <div className="shopCart-badge"> 2 </div>
                <CartMenu />
            </li>
        </ul>
    );
};

export default ShopCart;
