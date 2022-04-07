import "../../css/main.css";
import "./SearchPage.css";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../Context";
import { ProductItemCard } from "../Products";


export const SearchPage = () => {

    const query = new URLSearchParams(useLocation().search); //?searchTerm=${encodeURIComponent(searchTerm)}
    const searchTerm = query.get('searchTerm') //{encodeURIComponent(searchTerm)}

    const { products } = useProducts();
    const { productData } = products;

    const searchData = productData.filter(({categoryName, brandName}) => 
        categoryName.toLowerCase().includes(searchTerm.toLowerCase())||
        brandName.toLowerCase().includes(searchTerm.toLowerCase())||
        searchTerm.toLowerCase().includes(categoryName.toLowerCase())||
        searchTerm.toLowerCase().includes(brandName.toLowerCase())
    )

    return(
        <main className="main-searchpage">
            <div className="spacer-2"></div>
            {
                searchData.length!==0 ? 
                <>  
                    <p className="title-searchpage text-2xl"><span className="font-semibold">Search Result</span> Items {searchData.length}</p>
                        <div className="spacer-2"></div>
                        <div className="container-searchpage-card flex flex-justify-start flex-wrap mt-2 ml-5 mr-5 mb-2">
                            {
                                searchData.map((item) => {
                                    return(                                
                                        <ProductItemCard item={item} key={item._id}/>
                                    )
                                })
                            }
                        </div>
                </>

                :
                <div className="container-wishlist-empty flex flex-column">
                    <p className="title-searchpage text-2xl"><span className="font-semibold">Search Result</span> Items {searchData.length}</p>
                </div> 
                
            }
        </main>
       
    )
}