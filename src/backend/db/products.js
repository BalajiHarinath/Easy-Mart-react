import { v4 as uuid } from "uuid";
import { NikeCourtSkateboarding, NikeMagnifyNitroRunning, NikeSoftrideRiftShoes, NikeQuestRunningShoes,
  PumaFlexControlTraining, PumaSoftRideRiftTech, PumaZodRunnerSneakers, PumaZetaRunningShoes,
  RaybanAviatorClassic, RaybanJack, RaybanRoundMetal, RaybanOrion,
  JohnjacobsClubMasterClassic, JohnjacobsRoundAbout, JohnjacobsRoundMetal, JohnjacobsStateStreet,
  NikeBlackOriginal, NikeWhiteSports, NikeWhiteClub, NikeWhiteRunner } from "../../Assets/Images/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  /*Nike shoes*/
  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Best Seller",
    image : {
      src : NikeCourtSkateboarding,
      alt : "Nike-Court-Skateboarding"
    } , 
    brand : "Nike",
    product : "Court Skateboarding",
    description : "",
    rating : 4,
    numberOfReviews : "257 reviews",
    price : "Rs. 1999/-",
    priceStrike: "Rs. 4999/-",
    includeInDealsOfTheDay: true,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Best Seller",
    image : {
      src : NikeSoftrideRiftShoes,
      alt : "Nike-Softride-Rift-Shoes"
    } , 
    brand : "Nike",
    product : "Softride Rift Shoes",
    description : "",
    rating : 3,
    numberOfReviews : "435 reviews",
    price : "Rs. 4999/-",
    priceStrike: "Rs. 5999/-",
    includeInDealsOfTheDay: false,
  },
  
  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Best Seller",
    image : {
      src : NikeQuestRunningShoes,
      alt : "Nike-Quest-Running-Shoes"
    } , 
    brand : "Nike",
    product : "Quest Running Shoes",
    description : "",
    rating : 5,
    numberOfReviews : "657 reviews",
    price : "Rs. 6999/-",
    priceStrike: "Rs. 7999/-",
    includeInDealsOfTheDay: false,
  },

   /*Puma shoes */
  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "",
    image : {
      src : PumaZetaRunningShoes,
      alt : "Puma-Zeta-Running-Shoes"
    } , 
    brand : "Puma",
    product : "Zeta Running Shoes",
    description : "",
    rating : 5,
    numberOfReviews : "951 reviews",
    price : "Rs. 2999/-",
    priceStrike: "Rs. 5999/-",
    includeInDealsOfTheDay: true,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Best Seller",
    image : {
      src : PumaSoftRideRiftTech,
      alt : "Puma-Soft-Ride-Rift-Tech"
    } , 
    brand : "Puma",
    product : "Soft Ride Rift Tech",
    description : "",
    rating : 5,
    numberOfReviews : "757 reviews",
    price : "Rs. 3999/-",
    priceStrike: "Rs. 4999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Best Seller",
    image : {
      src : PumaZodRunnerSneakers,
      alt : "Puma-Zod-Runner-Sneakers"
    } , 
    brand : "Puma",
    product : "Zod Runner Sneakers",
    description : "",
    rating : 2,
    numberOfReviews : "237 reviews",
    price : "Rs. 9999/-",
    priceStrike: "Rs. 10999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Best Seller",
    image : {
      src : PumaFlexControlTraining,
      alt : "Puma-Flex-Control-Training"
    } , 
    brand : "Puma",
    product : "Flex Control Training",
    description : "",
    rating : 4,
    numberOfReviews : "223 reviews",
    price : "Rs. 3999/-",
    priceStrike: "Rs. 4999/-",
    includeInDealsOfTheDay: false,
  },

  /*Rayban glasses */
  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : RaybanAviatorClassic,
      alt : "Rayban-Aviator-Classic"
    } , 
    brand : "Rayban",
    product : "Aviator Classic",
    description : "",
    rating : 3,
    numberOfReviews : "456 reviews",
    price : "Rs. 3999/-",
    priceStrike: "Rs. 7999/-",
    includeInDealsOfTheDay: true,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : RaybanJack,
      alt : "Rayban-Jack"
    } , 
    brand : "Rayban",
    product : "Jack",
    description : "",
    rating : 4,
    numberOfReviews : "234 reviews",
    price : "Rs. 5999/-",
    priceStrike: "Rs. 6999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : RaybanRoundMetal,
      alt : "Round-Metal"
    } , 
    brand : "Rayban",
    product : "Round Metal",
    description : "",
    rating : 4,
    numberOfReviews : "123 reviews",
    price : "Rs. 1999/-",
    priceStrike: "Rs. 2999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : RaybanOrion,
      alt : "Rayban-Orion"
    } , 
    brand : "Rayban",
    product : "Orion",
    description : "",
    rating : 4,
    numberOfReviews : "345 reviews",
    price : "Rs. 8999/-",
    priceStrike: "Rs. 9999/-",
    includeInDealsOfTheDay: false,
  },

   /*Johnjacobs glasses */

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : JohnjacobsClubMasterClassic,
      alt : "Johnjacobs-Club-Master-Classic"
    } , 
    brand : "John Jacobs",
    product : "Club Master Classic",
    description : "",
    rating : 4,
    numberOfReviews : "678 reviews",
    price : "Rs. 6999/-",
    priceStrike: "Rs. 7999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : JohnjacobsRoundAbout,
      alt : "Johnjacobs-Round-About"
    } , 
    brand : "John Jacobs",
    product : "Round About",
    description : "",
    rating : 4,
    numberOfReviews : "988 reviews",
    price : "Rs. 2999/-",
    priceStrike: "Rs. 3999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : JohnjacobsRoundMetal,
      alt : "Johnjacobs-Round-Metal"
    } , 
    brand : "John Jacobs",
    product : "Round Metal",
    description : "",
    rating : 4,
    numberOfReviews : "366 reviews",
    price : "Rs. 9999/-",
    priceStrike: "Rs. 10999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "horror",
    cardBadge : "Best Seller",
    image : {
      src : JohnjacobsStateStreet,
      alt : "Johnjacobs-State-Street"
    } , 
    brand : "John Jacobs",
    product : "State Street",
    description : "",
    rating : 4,
    numberOfReviews : "965 reviews",
    price : "Rs. 3999/-",
    priceStrike: "Rs. 4999/-",
    includeInDealsOfTheDay: false,
  },

  /*Nike T shirts */

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge : "",
    image : {
      src : NikeBlackOriginal,
      alt : "Nike-Black-Original"
    } , 
    brand : "Nike",
    product : "Black Original",
    description : "",
    rating : 4,
    numberOfReviews : "735 reviews",
    price : "Rs. 999/-",
    priceStrike: "Rs. 3999/-",
    includeInDealsOfTheDay: true,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge : "Best Seller",
    image : {
      src : NikeWhiteSports,
      alt : "Nike-White-Sports"
    } , 
    brand : "Nike",
    product : "White Sports",
    description : "",
    rating : 4,
    numberOfReviews : "934 reviews",
    price : "Rs. 599/-",
    priceStrike: "Rs. 999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge : "Best Seller",
    image : {
      src : NikeWhiteClub,
      alt : "Nike-White-Club"
    } , 
    brand : "Nike",
    product : "White Club",
    description : "",
    rating : 4,
    numberOfReviews : "896 reviews",
    price : "Rs. 1999/-",
    priceStrike: "Rs. 2999/-",
    includeInDealsOfTheDay: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge : "Best Seller",
    image : {
      src : NikeWhiteRunner,
      alt : "Nike-White-Runner"
    } , 
    brand : "Nike",
    product : "White Runner",
    description : "",
    rating : 4,
    numberOfReviews : "289 reviews",
    price : "Rs. 2999/-",
    priceStrike: "Rs. 3999/-",
    includeInDealsOfTheDay: false,
  },
];
