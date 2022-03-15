import "./ProductAside.css"
import "./ProductMain.css"
import { ProductCard } from "./ProductCard"
import { useData } from "../../../context/data/data-context"

export const ProductMain = () => {
    // const { state } = useData()
    return(
        <>
            <main className="product">
            <h4 className="heading fw__500">Showing All Products <span className="product__subtext fw__400">(Showing 10 products)</span></h4>
            {/* {
                state.products.map((product)=>{
                    return <ProductCard product={product}  key={product._id} />
                })
            } */}
            
            </main>
        </>
    )
}