import { v4 as uuid } from "uuid";
import { brand1, brand2, brand3, brand4, brand5 } from "../../Assets/Images";
/**
 * Brand Database can be added here.
 * You can add brand of your wish with different attributes
 * */

export const brands = [
  {
    _id: uuid(),
    brandName: "Nike",
    image : {
          src : brand1,
          alt : "brand-nike-image"
        }  
  },

  {
    _id: uuid(),
    brandName: "Adidas",
    image : {
          src : brand2,
          alt : "brand-adidas-image"
        }    
  },

  {
    _id: uuid(),
    brandName: "Puma",
    image : {
          src : brand3,
          alt : "brand-puma-image"
        }  
  },

  {
    _id: uuid(),
    brandName: "Rayban",
    image : {
          src : brand4,
          alt : "brand-rayban-image"
        }  
  },

  {
    _id: uuid(),
    brandName: "John Jacobs",
    image : {
          src : brand5,
          alt : "brand-johnjacobs-image"
        }  
  }
];
