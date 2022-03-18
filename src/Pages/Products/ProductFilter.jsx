import "../../css/main.css";
import "./Products.css";
import { useCategory, useBrand, useProducts } from "../../Context";

export const ProductFilter = ({showFilterSmallScreen, setShowFilterSmallScreen}) => {
    
    const { categoryData  } = useCategory();
    const { brandData } = useBrand();
    const { products, productsDispatch} = useProducts();

    return(
        <div className = {`${showFilterSmallScreen ? "left-filter-small-screen" : "left-filter"} flex flex-column m-2`}>

        <div className="container-btn-left-filter flex flex-gap-3 mb-1">
            <span className="text-xl font-semibold">Filters</span>
            <button className="btn-transparent filter-clear text-xl" onClick={() => productsDispatch({type:"CLEAR"})}>Clear</button>
        </div>

        <div className="container-btn-left-filter-small-screen pdb-2">
            <button className="btn-apply-left-filter-small-screen btn-transparent text-xl font-semibold" 
                onClick={()=>{setShowFilterSmallScreen(!showFilterSmallScreen)}}>
                    Apply
            </button>
            <button className="btn-clear-left-filter-small-screen filter-clear btn-transparent text-xl" 
                onClick={()=>{setShowFilterSmallScreen(!showFilterSmallScreen);
                                productsDispatch({type:"CLEAR"})}}>
                    Clear
            </button>
        </div>

        <ul className="flex flex-column list-style-none">
            {/* <!--Rating--> */}
            <li className="text-lg font-semibold text-align-left mt-1 mb-1">Rating</li>
            <li className="line-spacing text-align-left">
                <datalist id="tickmarks" className="text-sm datalist-filter flex flex-gap-1-4">
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                </datalist>
                <input className="slider m-0" type="range" min="1" max="5" step="1" value={products.filterData.filterByRating} onChange={(e) => productsDispatch({type: "FILTER_BY_RATING", payload: e.target.value})}/>   
            </li>

            <div className="spacer-1"></div>

            {/* <!--Categories--> */}
            <li className="text-lg font-semibold text-align-left mt-1 mb-1">Category</li>
            {
                categoryData && categoryData.map(({_id, categoryName}) => {
                    return(
                        <li className="line-spacing" key={_id}>
                            <label className="text-capitalize text-sm flex flex-align-center flex-gap-0-5">
                                <input className="filter-checkbox-field" type="checkbox" checked={products.filterData.filterByCategory.includes(categoryName)} onChange={() => {productsDispatch({type: "FILTER_BY_CATEGORY", payload: categoryName})}}/>
                                {categoryName}
                            </label>
                        </li>
                    ) 
                })
            }                 

            <div className="spacer-1"></div>

            {/* <!--Brands--> */}
            <li className="text-lg font-semibold text-align-left mt-1 mb-1">Brand</li>
            {
                brandData && brandData.map(({_id, brandName}) => {
                    return(
                        <li className="line-spacing" key={_id}>
                            <label className="text-capitalize text-sm flex flex-align-center flex-gap-0-5">
                                <input className="filter-checkbox-field" type="checkbox" checked={products.filterData.filterByBrand.includes(brandName)} onChange={() => {productsDispatch({type: "FILTER_BY_BRAND", payload: brandName})}}/>
                                {brandName}
                            </label>
                        </li>
                    )
                })
            }

            <div className="spacer-1"></div>

            {/* <!--Sort by--> */}
            <li className="text-lg font-semibold text-align-left mt-1 mb-1">Sort by</li>
            <li className="line-spacing">
                <label className="text-sm flex flex-align-center flex-gap-0-5">
                    <input className="filter-checkbox-field" type="radio" name="price-sort" onClick={() => productsDispatch({type: "SORT_LOW_TO_HIGH"})} />
                    Price - Low to High
                </label>
            </li>
            <li className="line-spacing">
                <label className="text-sm flex flex-align-center flex-gap-0-5">
                    <input className="filter-checkbox-field" type="radio" name="price-sort" onClick={() => productsDispatch({type: "SORT_HIGH_TO_LOW"})}/>
                    Price - High to Low
                </label>
            </li>

            <div className="spacer-1"></div>
            
            <li className="line-spacing">                     
                <label className="text-sm flex flex-align-center flex-gap-0-5">
                    <input className="filter-checkbox-field" type="checkbox" checked={products.filterData.outOfStock} onChange={() => productsDispatch({type: "OUT_OF_STOCK", payload: products.filterData.outOfStock})}/>
                    Include Out Of Stock
                </label>                                
            </li>
        </ul>
    </div>
    )
}