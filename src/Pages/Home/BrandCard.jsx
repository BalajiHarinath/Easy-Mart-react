import "../../css/main.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Context/ProductsContext";

export const BrandCard = ({brandData}) => {
    const navigate = useNavigate();
    const { productsDispatch } = useProducts();
    return(
        <div className="flex flex-wrap flex-justify-center flex-align-center flex-gap-2">
            {
               brandData && brandData.map(({_id, brandName, image:{ src,alt }}) => {
                    return(
                    <div className="container-brand cursor-pointer" key={_id}
                        onClick={() =>
                            {
                                productsDispatch({type: "FILTER_BY_BRAND", payload: brandName});
                                navigate("/products");
                            }}
                    >
                        <div className="container-overlay-brand flex flex-column flex-grow-1">
                            <img className="image-brand" loading="lazy" src={src} alt={alt}/>
                        </div>
                    </div>
                    )      
                })
            }
        </div>
    )
}