import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetail from "../../components/ProductDetail"
import { getFirestore } from '../../firebase'

import "./ProductPage.css"

const ProductPage = () => {

    const { productName } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const db = getFirestore()

        db.collection("products")
            .where("url", "==", productName)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setProduct(doc.data())
                });
            })
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