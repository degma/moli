import { Link } from 'react-router-dom'
import "./CategoryCard.css"

const CategoryCard = ({ name, pictureUrl, categoryUrl }) => {
    return (
        <Link to={categoryUrl}>
            <div className="category-card-container">
                <div className="category-card-picture">
                    <img src={pictureUrl} alt={name}/>
                </div>
                <h2 className="category-card-name">{name}</h2>
            </div>
        </Link>
    )
}

export default CategoryCard