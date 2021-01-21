import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetail from "../../components/ProductDetail"
import { getFirestore } from '../../firebase'

import "./ProductPage.css"

const ProductPage = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const db = getFirestore()
        console.log(productId)
        db.collection("products")
            .doc(productId)
            .get()
            .then((doc)=> setProduct(doc.data()))
            .catch(error=> console.log("NO EXISTE EL PRODUCTO", error));
    }, []);

    return (
        <div className="product-container">
            {product ?
                <ProductDetail item={product} />
                :
                <p>Cargando producto...</p>
            }
        </div>
    )
}

export default ProductPage;