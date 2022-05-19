import { v4 as uuid } from "uuid";
import {
  NikeCourtSkateboarding,
  NikeMagnifyNitroRunning,
  NikeSoftrideRiftShoes,
  NikeQuestRunningShoes,
  PumaFlexControlTraining,
  PumaSoftRideRiftTech,
  PumaZodRunnerSneakers,
  PumaZetaRunningShoes,
  RaybanAviatorClassic,
  RaybanJack,
  RaybanRoundMetal,
  RaybanOrion,
  JohnjacobsClubMasterClassic,
  JohnjacobsRoundAbout,
  JohnjacobsRoundMetal,
  JohnjacobsStateStreet,
  NikeBlackOriginal,
  NikeWhiteSports,
  NikeWhiteClub,
  NikeWhiteRunner,
} from "../../Assets/Images/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  /*Nike shoes*/
  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge: "Best Seller",
    image: {
      src: NikeCourtSkateboarding,
      alt: "Nike-Court-Skateboarding",
    },
    brandName: "Nike",
    product: "Court Skateboarding",
    description:
      "A pair of Court Skateboarding shoes, has regular Styling, lace-ups detail, Leather upper, Extended rubber toe bumper adds durability to this high-wear area. Slightly higher taping between the midsole and the upper helps create more consistent flick.",
    rating: 4,
    numberOfReviews: "257 reviews",
    price: "1999",
    priceStrike: "4999",
    includeInDealsOfTheDay: true,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge: "",
    image: {
      src: NikeSoftrideRiftShoes,
      alt: "Nike-Softride-Rift-Shoes",
    },
    brandName: "Nike",
    product: "Softride Rift Shoes",
    description:
      "A pair of black Softride Rift shoes, has regular Styling, lace-ups detail, Leather upper, Unique design gives you the option to lace your shoes using traditional eyestay or using ghillie loops for extra durability. Cushioned footbed Auxetic shapes between the midsole and the outsole expand and contract in all directions to help enhance boardfeel and deliver consistent flick.",
    rating: 3,
    numberOfReviews: "435 reviews",
    price: "4999",
    priceStrike: "5999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge: "Sold Out",
    image: {
      src: NikeQuestRunningShoes,
      alt: "Nike-Quest-Running-Shoes",
    },
    brandName: "Nike",
    product: "Quest Running Shoes",
    description:
      "The Nike Quest 3 delivers functional versatility for the committed runner. Its streamlined design features layers of material to help you stay cool and secure. Increased foam heights give you more responsiveness for comfort on every mile",
    rating: 5,
    numberOfReviews: "657 reviews",
    price: "6999",
    priceStrike: "7999",
    includeInDealsOfTheDay: false,
    outOfStock: true,
  },

  /*Puma shoes */
  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge: "Best Seller",
    image: {
      src: PumaZetaRunningShoes,
      alt: "Puma-Zeta-Running-Shoes",
    },
    brandName: "Puma",
    product: "Zeta Running Shoes",
    description:
      "Fully mesh upper for breathability EVA midsole for perfect cushioning and lightness Rubber outsole, offers tenacity PUMA wordmark on the sides of the right side PUMA cat logo on the heel counter and tongue.",
    rating: 5,
    numberOfReviews: "951 reviews",
    price: "2999",
    priceStrike: "5999",
    includeInDealsOfTheDay: true,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge: "",
    image: {
      src: PumaSoftRideRiftTech,
      alt: "Puma-Soft-Ride-Rift-Tech",
    },
    brandName: "Puma",
    product: "Soft Ride Rift Tech",
    description:
      "A pair of round-toe white sneakers, has regular styling, lace-up detail, Canvas upper Cushioned footbed Textured and patterned outsole.",
    rating: 5,
    numberOfReviews: "757 reviews",
    price: "3999",
    priceStrike: "4999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge: "",
    image: {
      src: PumaZodRunnerSneakers,
      alt: "Puma-Zod-Runner-Sneakers",
    },
    brandName: "Puma",
    product: "Zod Runner Sneakers",
    description:
      "A pair of maroon red and light slate grey running shoes, has regular styling, lace-up detail, Fully mesh upper for breathability",
    rating: 2,
    numberOfReviews: "237 reviews",
    price: "9999",
    priceStrike: "10999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shoes",
    cardBadge: "",
    image: {
      src: PumaFlexControlTraining,
      alt: "Puma-Flex-Control-Training",
    },
    brandName: "Puma",
    product: "Flex Control Training",
    description:
      "A pair of blue-white Flex Control Taining shoes, has regular Styling, lace-ups detail, Textile upper Cushioned footbed Textured and patterned outsole.",
    rating: 4,
    numberOfReviews: "223 reviews",
    price: "3999",
    priceStrike: "4999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  /*Rayban glasses */
  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "Best Seller",
    image: {
      src: RaybanAviatorClassic,
      alt: "Rayban-Aviator-Classic",
    },
    brandName: "Rayban",
    product: "Aviator Classic",
    description:
      "Look snazzy with a brand new pair of aviator sunglasses from Rayban. This grey pair can be worn with tailored shorts and a fashion-forward shirt when you need an upscale date ensemble.",
    rating: 3,
    numberOfReviews: "456 reviews",
    price: "3999",
    priceStrike: "7999",
    includeInDealsOfTheDay: true,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "",
    image: {
      src: RaybanJack,
      alt: "Rayban-Jack",
    },
    brandName: "Rayban",
    product: "Jack",
    description:
      "These trendy oval sunglasses from Ray-Ban will enhance your overall style. Go to the beach with friends in style with this black pair and any casual dress.",
    rating: 4,
    numberOfReviews: "234 reviews",
    price: "5999",
    priceStrike: "6999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "Sold Out",
    image: {
      src: RaybanRoundMetal,
      alt: "Round-Metal",
    },
    brandName: "Rayban",
    product: "Round Metal",
    description:
      "Enjoy the sunshine in style when you wear these Ray-Ban oval sunglasses. When you're having a backyard party, wear this brown pair with denim shorts and a fitted tee.",
    rating: 2,
    numberOfReviews: "123 reviews",
    price: "1999",
    priceStrike: "2999",
    includeInDealsOfTheDay: false,
    outOfStock: true,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "",
    image: {
      src: RaybanOrion,
      alt: "Rayban-Orion",
    },
    brandName: "Rayban",
    product: "Orion",
    description:
      "Your brows will be the center of attention when you wear these sunglasses by Ray-Ban.",
    rating: 5,
    numberOfReviews: "345 reviews",
    price: "8999",
    priceStrike: "9999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  /*Johnjacobs glasses */

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "",
    image: {
      src: JohnjacobsClubMasterClassic,
      alt: "Johnjacobs-Club-Master-Classic",
    },
    brandName: "John Jacobs",
    product: "Club Master Classic",
    description:
      "The best combination for light weight, strength and durability. Suitable for everday use ...for u are a true Fashionista & Style Icon.",
    rating: 2,
    numberOfReviews: "678 reviews",
    price: "6999",
    priceStrike: "7999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "",
    image: {
      src: JohnjacobsRoundAbout,
      alt: "Johnjacobs-Round-About",
    },
    brandName: "John Jacobs",
    product: "Round About",
    description:
      "Keep your style in check with a pair of sleek square sunglasses from Voyage. This black pair can be matched with slim jeans and a high-quality tee when you're going for a stroll around the park.",
    rating: 3,
    numberOfReviews: "988 reviews",
    price: "2999",
    priceStrike: "3999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "Best Seller",
    image: {
      src: JohnjacobsRoundMetal,
      alt: "Johnjacobs-Round-Metal",
    },
    brandName: "John Jacobs",
    product: "Round Metal",
    description:
      "These in-season round sunglasses made by John Jacobs will keep you looking classy. Team this grey pair with a classy shirt and some tailored shorts for a must-have summertime ensemble.",
    rating: 5,
    numberOfReviews: "366 reviews",
    price: "9999",
    priceStrike: "10999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "glasses",
    cardBadge: "",
    image: {
      src: JohnjacobsStateStreet,
      alt: "Johnjacobs-State-Street",
    },
    brandName: "John Jacobs",
    product: "State Street",
    description:
      "Team this brown pair with a floral tee and cute shorts combo for a stylish beach look this season.",
    rating: 3,
    numberOfReviews: "965 reviews",
    price: "3999",
    priceStrike: "4999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  /*Nike T shirts */

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge: "",
    image: {
      src: NikeBlackOriginal,
      alt: "Nike-Black-Original",
    },
    brandName: "Nike",
    product: "Black Original",
    description:
      "Relaxed, tailored and ultra-comfortable, you'll love the way you look in this durable, reliable classic.",
    rating: 2,
    numberOfReviews: "735 reviews",
    price: "999",
    priceStrike: "3999",
    includeInDealsOfTheDay: true,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge: "",
    image: {
      src: NikeWhiteSports,
      alt: "Nike-White-Sports",
    },
    brandName: "Nike",
    product: "White Sports",
    description:
      "Say goodbye to that scratchy feeling against the back of your neck! This tee is equipped with a sturdy, breathable fabric and is the perfect style for everyday wear.",
    rating: 2,
    numberOfReviews: "934 reviews",
    price: "599",
    priceStrike: "999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge: "Best Seller",
    image: {
      src: NikeWhiteClub,
      alt: "Nike-White-Club",
    },
    brandName: "Nike",
    product: "White Club",
    description:
      "This premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite T-shirt. Soft, comfortable and durable, this is a definite must-own.",
    rating: 5,
    numberOfReviews: "896 reviews",
    price: "1999",
    priceStrike: "2999",
    includeInDealsOfTheDay: false,
    outOfStock: false,
  },

  {
    _id: uuid(),
    categoryName: "shirt",
    cardBadge: "Sold Out",
    image: {
      src: NikeWhiteRunner,
      alt: "Nike-White-Runner",
    },
    brandName: "Nike",
    product: "White Runner",
    description:
      "These tees are perfect when worn on their own, but also a great wear as a layer. The cotton/poly blend makes for a durable wear and a form-fit that won't change after a few washes and dries.",
    rating: 4,
    numberOfReviews: "289 reviews",
    price: "2999",
    priceStrike: "3999",
    includeInDealsOfTheDay: false,
    outOfStock: true,
  },
];
