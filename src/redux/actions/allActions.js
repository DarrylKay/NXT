export const addingNewDisplay = productArray => {
  return {
    type: "ADD_NEW_DISPLAY",
    payload: productArray
  };
};

export const addingFeaturedDisplay = productArray => {
  return {
    type: "ADD_FEATURED_DISPLAY",
    payload: productArray
  };
};

export const addingProductDisplay = productArray => {
  return {
    type: "ADD_PRODUCT_DISPLAY",
    payload: productArray
  };
};

export const addingProductWishlist = product => {
  return {
    type: "ADD_PRODUCT_WISHLIST",
    payload: product
  };
};

export const removingProductWishlist = product => {
  return {
    type: "REMOVE_PRODUCT_WISHLIST",
    payload: product
  };
};

export const removingProductCart = product => {
  return {
    type: "REMOVE_PRODUCT_CART",
    payload: product
  };
};

export const addingProductCart = product => {
  return {
    type: "ADD_PRODUCT_CART",
    payload: product
  };
};





export const openingProductInfo = product => {
  return {
    type: "OPEN_PRODUCT_INFO",
    payload: product
  };
};

export const closingProductInfo = product => {
  return {
    type: "CLOSE_PRODUCT_INFO",
    payload: product
  };
};

export const openingWishList = () => {
  return {
    type: "OPEN_WISHLIST"
  };
};

export const closingWishList = () => {
  return {
    type: "CLOSE_WISHLIST"
  };
};
