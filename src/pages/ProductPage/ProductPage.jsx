import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetail from "../../components/ProductDetail"
import PRODUCTS from "../../utils/sample-data"

import "./ProductPage.css"

const ProductPage = ({ item }) => {

    const { productName } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        const filteredProduct = PRODUCTS.filter((item) => item.url === productName)
        setTimeout(() => resolve(
            filteredProduct[0]
        ), 1000)

    })

    useEffect(() => {
        getProduct
            .then(response => {
                setProduct(response)
            })
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