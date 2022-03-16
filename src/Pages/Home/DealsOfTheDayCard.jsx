import "../../css/main.css";
import "./Home.css";

export const DealsOfTheDayCard = ({productData}) => {
    const dealsOfTheDayData = productData.filter(item => item.includeInDealsOfTheDay)
    return(
            <div className="flex flex-wrap flex-justify-center flex-align-center flex-gap-2">
                  {
                    dealsOfTheDayData.map((item,index) => {
                      const { cardBadge, image:{ src, alt }, company, product, rating, numberOfReviews, price, priceStrike } = item; 
                      return (
                          <div className="card-product flex flex-column mb-4 mr-2" key={index}>
                              <div className="container-img-product">
                                  {cardBadge && <div className="card-badge">{cardBadge}</div>}
                                  <img className="img-product" loading="lazy" src={src} alt={alt}/>
                              </div>
                              <div className="flex flex-column flex-gap-0-5">
                                  <h3 className="dod-company pdl-1 mt-0-5">{company}</h3>
                                  <h2 className="dod-product pdl-1">{product}</h2>
                                  <div className="card-rating flex flex-align-center pdl-1">
                                      <div className="card-rating-stars">
                                        {
                                            Array.apply(null, {length : rating}).map((e,i) => (<span className="material-icons text-lg" key={i}>star</span>))
                                        }
                                       </div>
                                       <div className="card-review">
                                           <p className="card-dod-reviews">{numberOfReviews}</p>
                                       </div>
                                   </div>
                                   <div className="card-price flex-gap-0-5 pdl-1">
                                       <p className="card-dod-discount-price">{price}</p>
                                       <p className="price-strike">{priceStrike}</p>
                                   </div>
                                   <div className="flex flex-column">
                                       <button className="btn-product-cart text-base flex flex-justify-center">
                                       <span className="material-icons text-lg pdr-0-5">shopping_cart</span>Add to Cart</button>
                                       <button className="btn-product-wishlist text-base">
                                           Add to Wishlist</button>
                                   </div>
                               </div>
                           </div>
                       );
                     })
                   
                }
            </div>
    )
}