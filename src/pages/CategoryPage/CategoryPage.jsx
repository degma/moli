import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import { getFirestore } from '../../firebase'
// import PRODUCTS from '../../utils/sample-data'

import "./CategoryPage.css"

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        // const filteredProducts = PRODUCTS.filter(function (n) {
        //     return n.category === categoryName;
        // });
        // setTimeout(() => setProducts(filteredProducts), 500)

        const db = getFirestore()
        db.collection('products').where("category", "==", categoryName)
            .get()
            .then((querySnapshot) => {
                const prods = []
                querySnapshot.forEach(doc => {
                    const document = doc.data()
                    document.id = doc.id
                    prods.push(document)
                })
                setProducts(prods)
            })

    }, [categoryName])


    return (

        products.length ?
            (
                <div>
                    <h1 className="category-title">{categoryName.replace(/-/g, " ")}</h1>
                    <div className="category-products">
                        {products.map(item => (<ProductCard key={item.name} {...item} handleClick={() => { }} />))}
                    </div>
                </div>
            )
            :
            (
                <p>NO HAY PRODUCTOS PARA LA CATEGORÍA</p>
            )





    )
}

export default CategoryPage;