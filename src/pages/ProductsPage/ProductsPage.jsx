const { default: ProductList } = require("../../containers/ProductList")


const ProductsPage = () => {

    return(
        <div>
            <h1>Productos</h1>
            <ProductList />

        </div>
    )
}

export default ProductsPage