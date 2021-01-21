
import ProductCard from '../../components/ProductCard'
import './ProductList.css'
import { useEffect, useState, useContext } from 'react'
import PRODUCTS from '../../utils/sample-data'
import { Store } from '../../store'
import { getFirestore } from '../../firebase'

const ProductList = ({ title }) => {
    const [data, setData] = useContext(Store)
    const [products, setProducts] = useState([]);

    function handleAddCart(qty,) {
        if (qty === 0) {
            return
        }

        setData({ ...data, cart: { itemsQty: data.cart.itemsQty + qty } })

    }

    useEffect(() => {

        const db = getFirestore()
        const productsCollection = db.collection("products")
        productsCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No results!")
            }
            console.log(querySnapshot.docs.map(doc => console.log(doc.id, doc.data())))

            setProducts(querySnapshot.docs.map(doc => {
                let document = doc.data()
                document.id = doc.id
                return document
            }))
        })

    }, [])

    useEffect(() => console.log("aslkdalksdla", products), [])
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