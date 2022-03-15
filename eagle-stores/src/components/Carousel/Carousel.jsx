import "./Carousel.css"
const Carousel = () => {
    return (
        <>
            <section id="carousel">
                <div className="carousel__overlay carousel__slider">
                    <div className="carousel__content">
                        <h1 className="carousel__heading">Welcome to EagleStore</h1>
                        <h3 className="carousel__subheading">For all your gadgets</h3>
                        <a href="./Pages/Product List/product-list.html" className="btn btn__default">Shop Now</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carousel