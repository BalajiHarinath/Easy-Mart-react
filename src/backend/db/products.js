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
    brandName : "Nike",
    product : "Court Skateboarding",
    description : "",
    rating : 4,
    numberOfReviews : "257 reviews",
    price : "1999",
    priceStrike: "4999",
    includeInDealsOfTheDay: true,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "",
    image : {
      src : NikeSoftrideRiftShoes,
      alt : "Nike-Softride-Rift-Shoes"
    } , 
    brandName : "Nike",
    product : "Softride Rift Shoes",
    description : "",
    rating : 3,
    numberOfReviews : "435 reviews",
    price : "4999",
    priceStrike: "5999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },
  
  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Sold Out",
    image : {
      src : NikeQuestRunningShoes,
      alt : "Nike-Quest-Running-Shoes"
    } , 
    brandName : "Nike",
    product : "Quest Running Shoes",
    description : "",
    rating : 5,
    numberOfReviews : "657 reviews",
    price : "6999",
    priceStrike: "7999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: true,
  },

   /*Puma shoes */
  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "Best Seller",
    image : {
      src : PumaZetaRunningShoes,
      alt : "Puma-Zeta-Running-Shoes"
    } , 
    brandName : "Puma",
    product : "Zeta Running Shoes",
    description : "",
    rating : 5,
    numberOfReviews : "951 reviews",
    price : "2999",
    priceStrike: "5999",
    includeInDealsOfTheDay: true,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "",
    image : {
      src : PumaSoftRideRiftTech,
      alt : "Puma-Soft-Ride-Rift-Tech"
    } , 
    brandName : "Puma",
    product : "Soft Ride Rift Tech",
    description : "",
    rating : 5,
    numberOfReviews : "757 reviews",
    price : "3999",
    priceStrike: "4999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "",
    image : {
      src : PumaZodRunnerSneakers,
      alt : "Puma-Zod-Runner-Sneakers"
    } , 
    brandName : "Puma",
    product : "Zod Runner Sneakers",
    description : "",
    rating : 2,
    numberOfReviews : "237 reviews",
    price : "9999",
    priceStrike: "10999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge : "",
    image : {
      src : PumaFlexControlTraining,
      alt : "Puma-Flex-Control-Training"
    } , 
    brandName : "Puma",
    product : "Flex Control Training",
    description : "",
    rating : 4,
    numberOfReviews : "223 reviews",
    price : "3999",
    priceStrike: "4999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
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
    brandName : "Rayban",
    product : "Aviator Classic",
    description : "",
    rating : 3,
    numberOfReviews : "456 reviews",
    price : "3999",
    priceStrike: "7999",
    includeInDealsOfTheDay: true,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "",
    image : {
      src : RaybanJack,
      alt : "Rayban-Jack"
    } , 
    brandName : "Rayban",
    product : "Jack",
    description : "",
    rating : 4,
    numberOfReviews : "234 reviews",
    price : "5999",
    priceStrike: "6999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Sold Out",
    image : {
      src : RaybanRoundMetal,
      alt : "Round-Metal"
    } , 
    brandName : "Rayban",
    product : "Round Metal",
    description : "",
    rating : 2,
    numberOfReviews : "123 reviews",
    price : "1999",
    priceStrike: "2999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: true,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "",
    image : {
      src : RaybanOrion,
      alt : "Rayban-Orion"
    } , 
    brandName : "Rayban",
    product : "Orion",
    description : "",
    rating : 5,
    numberOfReviews : "345 reviews",
    price : "8999",
    priceStrike: "9999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

   /*Johnjacobs glasses */

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "",
    image : {
      src : JohnjacobsClubMasterClassic,
      alt : "Johnjacobs-Club-Master-Classic"
    } , 
    brandName : "John Jacobs",
    product : "Club Master Classic",
    description : "",
    rating : 2,
    numberOfReviews : "678 reviews",
    price : "6999",
    priceStrike: "7999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "",
    image : {
      src : JohnjacobsRoundAbout,
      alt : "Johnjacobs-Round-About"
    } , 
    brandName : "John Jacobs",
    product : "Round About",
    description : "",
    rating : 3,
    numberOfReviews : "988 reviews",
    price : "2999",
    priceStrike: "3999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "Best Seller",
    image : {
      src : JohnjacobsRoundMetal,
      alt : "Johnjacobs-Round-Metal"
    } , 
    brandName : "John Jacobs",
    product : "Round Metal",
    description : "",
    rating : 5,
    numberOfReviews : "366 reviews",
    price : "9999",
    priceStrike: "10999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge : "",
    image : {
      src : JohnjacobsStateStreet,
      alt : "Johnjacobs-State-Street"
    } , 
    brandName : "John Jacobs",
    product : "State Street",
    description : "",
    rating : 3,
    numberOfReviews : "965 reviews",
    price : "3999",
    priceStrike: "4999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
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
    brandName : "Nike",
    product : "Black Original",
    description : "",
    rating : 2,
    numberOfReviews : "735 reviews",
    price : "999",
    priceStrike: "3999",
    includeInDealsOfTheDay: true,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge : "",
    image : {
      src : NikeWhiteSports,
      alt : "Nike-White-Sports"
    } , 
    brandName : "Nike",
    product : "White Sports",
    description : "",
    rating : 2,
    numberOfReviews : "934 reviews",
    price : "599",
    priceStrike: "999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge : "Best Seller",
    image : {
      src : NikeWhiteClub,
      alt : "Nike-White-Club"
    } , 
    brandName : "Nike",
    product : "White Club",
    description : "",
    rating : 5,
    numberOfReviews : "896 reviews",
    price : "1999",
    priceStrike: "2999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge : "Sold Out",
    image : {
      src : NikeWhiteRunner,
      alt : "Nike-White-Runner"
    } , 
    brandName : "Nike",
    product : "White Runner",
    description : "",
    rating : 4,
    numberOfReviews : "289 reviews",
    price : "2999",
    priceStrike: "3999",
    includeInDealsOfTheDay: false,
    itemInWishlist: false,
    itemInCart: false,
    outOfStock: true,
  },
];
