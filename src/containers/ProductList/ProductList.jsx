
import ProductCard from '../../components/ProductCard'
import Triple from '../../assets/img/triple.jpg'
import './ProductList.css'
import { useEffect, useState } from 'react'

const PRODUCTS = [
    {
        id: 1000,
        name: " Sandwich de Miga Tradicional",
        description: "Descripción",
        price: 850
    },
    {
        id: 1000,
        name: " Sandwich de Miga Tradicional",
        description: "Descripción",
        price: 850
    },
    {
        id: 1000,
        name: " Sandwich de Miga Tradicional",
        description: "Descripción",
        price: 850
    },
    {
        id: 1000,
        name: " Sandwich de Miga Tradicional",
        description: "Descripción",
        price: 850
    }
]

const ProductList = ({ title }) => {
    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => resolve(PRODUCTS), 2000)
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
                        <ProductCard key={item.id} name={item.name} description={item.description} price={item.price} picture={Triple} />
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