import ShopCartIcon from "../icons/cart-icon";

const ShopCart = () => {
    return (
        <ul >
            <li className="shopCart">
                <ShopCartIcon />
                <div className="shopCart-badge"> 2 </div>
            </li>
        </ul>
    );
}
 
export default ShopCart;