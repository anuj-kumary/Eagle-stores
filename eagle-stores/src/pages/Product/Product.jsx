import { ProductAside } from "./components/ProductAside"
import { ProductMain } from "./components/ProductMain"

export const Product = () => {
    return(
        <>
            <div class="product__container">
                <ProductAside />
                <ProductMain />
            </div>
        </>
    )
}