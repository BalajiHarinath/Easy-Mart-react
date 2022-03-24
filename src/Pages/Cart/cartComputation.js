export const getTotalMRP = (cart) => {
    const totalMRPreducer = (acc,curr) => acc+=Number(curr.priceStrike) * Number(curr.qty)
    return cart.length === 0 ? 0 : cart.reduce(totalMRPreducer,0)
}   

export const getDiscountAmount = (cart) => {
    const discountReducer = (acc,curr) => acc+=(Number(curr.priceStrike) - Number(curr.price)) * Number(curr.qty)
    return cart.length === 0 ? 0 : cart.reduce(discountReducer,0)
 }

export const getTotalAmount = (cart, discount) => {
    const totalAmountReducer = (acc,curr) => acc+=Number(curr.price) * Number(curr.qty)
    return cart.length === 0 ? 0 : cart.reduce(totalAmountReducer, discount)
}

export const getCartQuantity = (cart) => {
    const totalQuantityReducer = (acc,curr) => acc+=Number(curr.qty)
    return cart.length === 0 ? 0 : cart.reduce(totalQuantityReducer, 0)
}

