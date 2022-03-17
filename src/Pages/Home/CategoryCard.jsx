import "../../css/main.css";
import "./Home.css";

export const CategoryCard = ({categoryData}) => {
    return(
        <div className="flex flex-wrap flex-justify-center flex-align-center flex-gap-2">
            {
                categoryData && categoryData.map(({_id, categoryName, image: {src, alt} })=>{
                    return (
                        <a href="/" className="container-categories flex flex-column" key={_id}>
                            <div className="container-overlay-categories flex flex-column flex-grow-1">
                                <img className="image-category" loading="lazy" src={src} alt={alt}/>
                            </div>
                            <div className="text-overlay-categories flex flex-justify-center flex-align-center pd-1">
                                <h4 className="text-3xl font-bold">{categoryName}</h4>
                            </div>
                        </a>
                    )
                })   
            }
        </div>      
    )
}