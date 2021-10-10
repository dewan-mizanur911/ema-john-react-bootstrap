import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  const [searchedItems, setSearcheditems] = useState([]);
  const history = useHistory();

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearcheditems(data);
            });
    }, []);
    useEffect(() => {
        const storageItem = getStoredCart();
        const items = [];
        for (const key in storageItem) {
            const addedProduct = products.find((product) => product.key === key);
            if (addedProduct) { 
                 addedProduct.quantity = storageItem[key];
                 items.push(addedProduct);
            }
        }
        setCart(items);
    },[products])

    const handleAddToCart = product => {
        const exists = cart.find(cd => cd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(cd => cd.key !== product.key);
            product.quantity = product.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart);
        addToDb(product.key);
    }
  const handleOnSearch = (event) => {
    const searchedText = event.target.value;
    const items = products.filter(product => product.name.toLowerCase().includes(searchedText.toLowerCase()));
    setSearcheditems(items);
  };
    const handleReviewOrder = () => {
      history.push("/orders");
    };

    // getItems();
    return (
      <>
        <div className="search-container py-2">
          <input
            type="text"
            className="search-field"
            placeholder="Recipient's username"
            onChange={handleOnSearch}
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="products-container col-md-10 border-end border-3">
              {searchedItems.map((product) => (
                <Product
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}
                ></Product>
              ))}
            </div>
            <div className="cart-container col-md-2">
              <Cart key={cart.key} cart={cart}>
                <button
                  className="btn btn-warning border border-1 border-dark"
                  type="button"
                  onClick={handleReviewOrder}
                >
                  Review your order
                </button>
              </Cart>
            </div>
          </div>
        </div>
      </>
    );
};

export default Shop;