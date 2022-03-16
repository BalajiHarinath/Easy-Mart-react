import { v4 as uuid } from "uuid";
import { category1, category2, category3 } from "../../Assets/Images";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "shirt",
    image : {
          src : category1,
          alt : "category-shirt-image"
        }  
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    image : {
          src : category2,
          alt : "category-shoes-image"
        }    
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    image : {
          src : category3,
          alt : "category-sunglasses-image"
        }  
  },
];
