
import { useState, useEffect } from "react"
import CategoryCard from "../../components/CategoryCard"
import CATEGORIES from "../../utils/categories"
import "./CategoryList.css"

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const getCategories = new Promise((resolve, reject) => {
        setTimeout(()=> resolve(CATEGORIES),500)
    })

    useEffect(() => {
        getCategories.then(res => setCategories(res))
    }, [])
    return (
        <div className="category-list-container">

            {
                categories.length ?
                    (CATEGORIES.map((cat) => <CategoryCard name={cat.name} categoryUrl={cat.url} pictureUrl={cat.pictureUrl} />)) 
                    :(
                        <div>Cargando categorias...</div>

                    )
            }

        </div>
    )
}

export default CategoryList