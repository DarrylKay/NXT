

const initialState = {
  wishList: [],
  cart: [],
  productDisplay: [],
  FeaturedDisplay: [],
  NewDisplay:[],
  openProductInfo: {},
  wishListOpen: false
};

let newState;

export const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_DISPLAY":
      newState = Object.assign(
        /*get new object*/ {},
        /*merge it with the old state*/ state,
        /*assign newly created object with old state and new info to the state*/ {
          NewDisplay: action.payload
        }
      );
      return newState;

    case "ADD_FEATURED_DISPLAY":
      newState = Object.assign(
        /*get new object*/ {},
        /*merge it with the old state*/ state,
        /*assign newly created object with old state and new info to the state*/ {
          FeaturedDisplay: action.payload
        }
      );
      return newState;

    case "ADD_PRODUCT_DISPLAY":
      newState = Object.assign(
        /*get new object*/ {},
        /*merge it with the old state*/ state,
        /*assign newly created object with old state and new info to the state*/ {
          productDisplay: action.payload
        }
      );
      return newState;

    case "ADD_PRODUCT_WISHLIST":
      var wishList = [...state.wishList, action.payload];
      newState = Object.assign(
        /*get new object*/ {},
        /*merge it with the old state*/ state,
        /*assign newly created object with old state and new info to the state*/ {
          wishList: wishList
        }
      );
      return newState;

    case "REMOVE_PRODUCT_WISHLIST":
      wishList = state.wishList.filter(product => product !== action.payload);
      newState = Object.assign({}, state, { wishList: wishList });
      return newState;

    case "ADD_PRODUCT_CART":
      var cart = [...state.cart, action.payload];
      newState = Object.assign({}, state, {
        cart: cart
      });
      return newState;

    


    case "REMOVE_PRODUCT_CART":
      cart = state.cart.filter(product => product !== action.payload);
      newState = Object.assign({}, state, { cart: cart });
      return newState;

    case "OPEN_PRODUCT_INFO":
      newState = Object.assign({}, state, {
        openProductInfo: action.payload,
        
      });
      return newState;

    case "CLOSE_PRODUCT_INFO":
      newState = Object.assign({}, state, {
        productOpen: false
      });
      return newState;

    case "OPEN_WISHLIST":
      newState = Object.assign({}, state, {
        wishListOpen: true
      });
      return newState;

    case "CLOSE_WISHLIST":
      newState = Object.assign({}, state, {
        wishListOpen: false
      });
      return newState;

    default:
      return state;
  }
};
