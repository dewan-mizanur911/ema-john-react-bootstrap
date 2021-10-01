import { useEffect, useState } from "react";
import { getStoredCart } from "./fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);
        useEffect(() => {
          const storageItem = getStoredCart();
          const items = [];
          for (const key in storageItem) {
            const addedProduct = products.find(
              (product) => product.key === key
            );
            if (addedProduct) {
              addedProduct.quantity = storageItem[key];
              items.push(addedProduct);
            }
          }
          setCart(items);
        }, [products]);
    return [cart, setCart];
}
export default useCart;