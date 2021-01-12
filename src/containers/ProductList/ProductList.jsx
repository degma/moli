
import ProductCard from '../../components/ProductCard'
import './ProductList.css'
import { useEffect, useState, useContext } from 'react'
import PRODUCTS from '../../utils/sample-data'
import { Store } from '../../store'

const ProductList = ({ title }) => {
    const [data, setData] = useContext(Store)

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => resolve(PRODUCTS), 200)
        console.log(PRODUCTS)
    })

    function handleAddCart(qty, ) {
        if (qty === 0) {
            return
        }

        setData({ ...data, cart: { itemsQty: data.cart.itemsQty + qty} })

    }

    useEffect(() => {
        getProducts.then((res) => setProducts(res))
    }, [])

    return (
        <div className="product-list-container">
            {/* <h1>{title}</h1> */}
            <div className="product-card-list">
                {
                    products.length ?
                        (products.map(item => (
                            <ProductCard key={item.id} {...item} handleAddCart={handleAddCart} />
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