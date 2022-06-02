import "../../css/main.css";
import "./Products.css";
import { ProductFilter, ProductItemCard, getSortedItems, getFilteredItems } from "./index";
import { useProducts } from "../../Context";
import { useState } from "react";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Products = () => {
    useScrollToTop();
    useDocumentTitle("Products");
    const [showFilterSmallScreen, setShowFilterSmallScreen] = useState(false);
    const { products } = useProducts();
    const { productStatus, productData, sortBy, filterData} = products;

    const sortedData = getSortedItems(productData, sortBy);
    const filteredData = getFilteredItems(sortedData, filterData);

    return(       
        // <!--Main-->
        <>
        <main className="main flex flex-column">
            <div className="grid-4-column">
                <ProductFilter showFilterSmallScreen={showFilterSmallScreen} setShowFilterSmallScreen={setShowFilterSmallScreen}/>

                <div className="product-display flex flex-grow-1 flex-gap-2 flex-wrap mt-2 mr-4 mb-2">
                    { productStatus==="loading" && <div className="loading font-semibold text-2xl">Loading...</div>}
                    { productStatus==="success" &&
                        filteredData.length===0 ? <div className="loading font-semibold text-2xl">No Products Found</div>
                            : filteredData.map((item) => {
                                return(                                
                                    <ProductItemCard item={item} key={item._id}/>
                                )
                            })
                    }
                    { productStatus==="error" && <div>{productData}</div>}
                </div>
            </div>
        </main>

        <button className="filter-navigation-small-screen btn-filter-small-screen btn-transparent" 
            onClick={()=>{setShowFilterSmallScreen(!showFilterSmallScreen)}}>
            <span className=" text-xl font-semibold">Filters</span>
            <span className="material-icons">filter_alt</span>
        </button>
     </>
    )
}