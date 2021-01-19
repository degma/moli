
import { useState, useEffect } from "react"
import CategoryCard from "../../components/CategoryCard"
import { getFirestore } from "../../firebase"

import "./CategoryList.css"

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        const db = getFirestore()
        const categoryCollection = db.collection("categories")
        categoryCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No results!")
            }
            setCategories(querySnapshot.docs.map(doc => doc.data()))
        })

    }, [])
    return (
        <div className="category-list-container">

            {
                categories.length ?
                    (categories.map((cat) => <CategoryCard key={cat.id} name={cat.name} categoryUrl={cat.url} pictureUrl={cat.pictureUrl} />))
                    : (
                        <div>Cargando categorias...</div>

                    )
            }

        </div>
    )
}

export default CategoryList