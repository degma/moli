import HomeSlider from "../../components/HomeSlider"
import CategoryList from "../../containers/CategoryList"
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <div className="home-slider">
                <HomeSlider />
            </div>
            <h1 className="title">Nuestros Productos</h1>
            <CategoryList />
        </div>

    )
}

export default HomePage