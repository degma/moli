import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import PRODUCTS from '../../utils/sample-data'

import "./CategoryPage.css"

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        const filteredProducts = PRODUCTS.filter(function (n) {
            return n.category === categoryName;
        });
        setTimeout(() => setProducts(filteredProducts), 500)

    }, [categoryName])


    return (

        products.length ?
            (
                <div>
                    <h1 className="category-title">{categoryName.replace(/-/g, " ")}</h1>
                    <div className="category-products">
                        {products.map(item => (<ProductCard key={item.id} {...item} />))}
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