import "../../css/main.css";
import "./Home.css";
import homeImage from "../../Assets/Images/home-image.jpg";
import { useCategory, useBrand, useProducts } from "../../Context";
import { CategoryCard, BrandCard, DealsOfTheDayCard } from "./index";
import { Link } from "react-router-dom";

export const Home = () => {
    const { categoryStatus, categoryData } = useCategory();
    const { brandStatus, brandData } = useBrand();
    const { products } = useProducts();
    const { productStatus, productData } = products;
   
    return (
        <main className="main-home flex flex-column">
          
            <div className="grid-4-column m-1">
                <img className="image-home" loading="lazy" src={homeImage}  alt="home-image"/>
                <div className="text-home flex flex-column flex-justify-center flex-align-center">
                    <p className="text-3xl font-bold pd-1">Bigger brands biggest discounts!!!</p>
                    <p className="pdl-1">Save 50% on your first purchase</p>
                    <Link className="btn-home btn-solid btn-medium flex flex-align-center flex-justify-center font-bold m-1" to="/products">Shop Now</Link>
                </div>
            </div>

            <div className="spacer-4"></div>

            {/* {categories} */}
            <div className="flex flex-column flex-gap-2">
                <h3 className="flex flex-justify-center category-header">Featured Categories</h3>              
                  {categoryStatus==="loading" && <div>Loading...</div>}
                  {categoryStatus==="success" && <CategoryCard categoryData={categoryData} />}
                  {categoryStatus==="error" && <div>{categoryData}</div>}
            </div> 

            <div className="spacer-5"></div>

            {/* {brands} */}
            <div className="flex flex-column flex-gap-2">
                <h3 className="flex flex-justify-center category-header">Featured Brands</h3>               
                    {brandStatus==="loading" && <div>Loading...</div>}
                    {brandStatus==="success" && <BrandCard brandData={brandData} />}
                    {brandStatus==="error" && <div>{brandData}</div>}
            </div>

            <div className="spacer-5"></div>
             {/* <!--Deals of the day--> */}
            <div className="flex flex-column flex-gap-2 flex-wrap">
                <h3 className="flex flex-justify-center category-header">Deals of the day</h3>
                { productStatus==="loading" && <div>Loading...</div>}
                { productStatus==="success" && <DealsOfTheDayCard productData={productData}/>} 
                { productStatus==="error" && <div>{productData}</div>}              

                <div className="spacer-2"></div>
            </div> 
        </main>
    )
}
