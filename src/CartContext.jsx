import { createContext, useState } from "react";
import { products, getProductData } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => (product.id === id)
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      //product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      //product is already in cart
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id){
    const quantity = getProductQuantity(id)
    if(quantity === 1){
        deleteFromCart(id);
    }else{
        setCartProducts(
            cartProducts.map((product) => 
            product.id === id
            ?{
                ...product,
                quantity: product.quantity - 1
            }
            :product
        )
        )
    }
  }

  function deleteFromCart(id) {
    //Using filter method to return a new array of objects whose id does not match the passed id
    setCartProducts((cartProducts) => {
       return cartProducts.filter((currentProduct) => currentProduct.id !== id)   
    });
  }

  


  function getTotalCost(){
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
        const productData = getProductData(cartItem.id);
        totalCost += (productData.price * cartItem.quantity);
    })

    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;