import { useEffect, useState } from "react"
import ProductDetail from "../../components/ProductDetail"

import "./Product.css"

const Product = ({ item }) => {

    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(()=>resolve({
            id: 10001,
            name: "Producto de Prueba",
            description: "Descripción del producto de prueba",
            price: 250,
            picture: "ALSKDALS"
        }), 2000)
        
    })

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
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

export default Product;