import "../../css/main.css";
import "./Home.css";
import { SingleDealsOfTheDayCard } from "./SingleDealsOfTheDayCard";

export const DealsOfTheDayCard = ({productData}) => {
    const dealsOfTheDayData = productData.filter(item => item.includeInDealsOfTheDay);
    return(
            <div className="flex flex-wrap flex-justify-center flex-align-center flex-gap-2">
                {
                    dealsOfTheDayData.map((item) => (
                        <SingleDealsOfTheDayCard item={item} key={item._id} />
                    ))    
                }
            </div>
    )
}