import "../../css/main.css";
import "./Home.css";
import { useProducts } from "../../Context/ProductsContext";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({categoryData}) => {
    const { productsDispatch } = useProducts();
    const navigate = useNavigate();
    return(
        <div className="flex flex-wrap flex-justify-center flex-align-center flex-gap-2">
            {
                categoryData && categoryData.map(({_id, categoryName, image: {src, alt} })=>{
                    return (
                        <div className="container-categories flex flex-column cursor-pointer" key={_id} 
                            onClick={() =>
                                {
                                    productsDispatch({type: "FILTER_BY_CATEGORY", payload: categoryName});
                                    navigate("/products");
                                }}
                        >
                            <div className="container-overlay-categories flex flex-column flex-grow-1">
                                <img className="image-category" loading="lazy" src={src} alt={alt}/>
                            </div>
                            <div className="text-overlay-categories flex flex-justify-center flex-align-center pd-1">
                                <h4 className="text-3xl font-bold text-capitalize">{categoryName}</h4>
                            </div>
                        </div>
                    )
                })   
            }
        </div>        
    )
}