import CategoryList from "../../containers/CategoryList"

import "./HomePage.css"

const HomePage = () =>{
    return(
        <div >
            <h1 className="title">NUESTROS PRODUCTOS</h1>
            <CategoryList />
        </div>
    )
}

export default HomePage