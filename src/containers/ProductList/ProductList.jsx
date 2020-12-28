
import ProductCard from '../../components/ProductCard'
import './ProductList.css'
import { useEffect, useState } from 'react'
import PRODUCTS from '../../utils/sample-data'

const ProductList = ({ title }) => {

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => resolve(PRODUCTS), 200)
        console.log(PRODUCTS)
    })


    useEffect(() => {
        getProducts.then((res) => setProducts(res))
    }, [])

    return (
        <div className="product-list-container">
            <h1>{title}</h1>
            <div className="product-card-list">
                {
                    products.length ?
                        (products.map(item => (
                            <ProductCard key={item.id} {...item} />
                        ))) :
                        (
                            <p> Cargando productos...</p>
                        )
                }
            </div>
        </div>
    )
}

export default ProductList