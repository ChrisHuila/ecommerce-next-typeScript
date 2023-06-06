import Image from 'next/image';
import { Product } from "@/types";

interface Props {
    article: Product
}

const ShowProduct = ({article}: Props) => {

    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${article?.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;

    
    return (
        <div className="showproduct-container">
            <h2>{article.nombre}</h2>
            <Image 
                src={url}
                alt={article.nombre}
                width={300}
                height={150}
            />
        </div>
      );
}
 
export default ShowProduct;