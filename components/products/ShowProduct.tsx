import priceFormat from '@/services/priceFormat';
import Image from 'next/image';
import { Product } from "@/types";
import ThunderIcon from '../icons/Thunder';

interface Props {
    article: Product
}

const ShowProduct = ({article}: Props) => {

    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${article?.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;

    const discountPrice = `$${priceFormat(parseInt(article.precio)*2.5)}`;
    const finalPrice = `$${priceFormat(parseInt(article.precio))}`;

    return (
        <div className="showproduct-container">
            <div className="showproduct-img_container">
                <Image 
                    src={url}
                    alt={article.nombre}
                    width={200}
                    sizes='(max-width: 100%)'
                    height={150}
                />
            </div>
            <h2 className='showproduct-title'>{article.nombre}</h2>
            
            <div className="showproduct-body_container">
                <h3 className='percentage-discount'>60% off Free Shipping <ThunderIcon /> <p className='price_discount'>{discountPrice}</p></h3>
                <h3 className='final-price'>Price: <span>{finalPrice}</span></h3>
            </div>
            <div className="showproduct-btn_container">
                <button className='showproduct-btn'>Add</button>
            </div>

        </div>
      );
}
 
export default ShowProduct;