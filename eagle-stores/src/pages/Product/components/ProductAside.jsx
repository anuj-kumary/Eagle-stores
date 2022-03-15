import "./ProductAside.css"
export const ProductAside = () => {
    return(
        <>
        <aside className="filter">
          <div className="filter__head">
            <h4>Filters</h4>
            <p>Clear</p>
          </div>
          <div className="filter__price">
              <h4 className="filter__heading">Price</h4>
              <div className="filter__range">
                  <p>50</p>
                  <p>150</p>
                  <p>200</p>
              </div>
              <input className="slider" type="range" name="" min="50" max="200" />
          </div>
          <div className="filter__category">
              <h4 className="filter__heading">Category</h4>
              <div className="filter__checkbox">
                  <label className="filter__input">
                      <input type="checkbox" name="" id="" />
                      <span className="filter__desc">Laptop</span>
                  </label>
                  <label className="filter__input">
                    <input type="checkbox" name="" id="" />
                    <span className="filter__desc">Mobile</span>
                </label>
                <label className="filter__input">
                    <input type="checkbox" name="" id="" />
                    <span className="filter__desc">Earphones</span>
                </label>
              </div>
          </div>
          <div className="filter__rating">
              <h4 className="filter__heading">Rating</h4>
              <div className="filter__checkbox">
                <label className="filter__input">
                    <input type="radio" name="" id="" />
                    <span className="filter__desc">4 Star & above</span>
                </label>
                <label className="filter__input">
                  <input type="radio" name="" id="" />
                  <span className="filter__desc">3 Star & above</span>
              </label>
              <label className="filter__input">
                  <input type="radio" name="" id="" />
                  <span className="filter__desc">2 star & above</span>
              </label>
              <label className="filter__input">
                <input type="radio" name="" id="" />
                <span className="filter__desc">1 star & above</span>
            </label>
          </div>
          </div>

          <div className="filter__sort">
              <h4 className="filter__heading">Sort by</h4>
              <div className="filter__radio">
                <label className="filter__input">
                    <input type="radio" name="" id="" />
                    <span className="filter__desc">Price - Low to High</span>
                </label>
                <label className="filter__input">
                  <input type="radio" name="" id="" />
                  <span className="filter__desc">Price - High to Low</span>
              </label>
              </div> 
          </div>
        </aside>
        </>
    )
}