export const getSortedItems = (productData, sortBy) => {
    if(sortBy === "") return productData
    let newData = [...productData];
    if(sortBy === "SORT_LOW_TO_HIGH") return newData.sort((a,b) => Number(a.price) - Number(b.price))
    if (sortBy === "SORT_HIGH_TO_LOW") return newData.sort((a,b) => Number(b.price) - Number(a.price))
    return productData;       
}

export const getFilteredItems = (productData,{ filterByCategory, filterByBrand, filterByRating, outOfStock }) => {
    if(productData.length!==0){
        let newData = [...productData];
        if(filterByCategory.length!==0) newData = newData.filter((item) => filterByCategory.includes(item.categoryName));
        if(filterByBrand.length!==0) newData = newData.filter((item) => filterByBrand.includes(item.brandName));
        if(!outOfStock) newData = newData.filter((item) => !item.outOfStock);
        if(filterByRating!==0) newData = newData.filter((item) => Number(item.rating) === Number(filterByRating));
        return newData;
    }
    return productData;     
}