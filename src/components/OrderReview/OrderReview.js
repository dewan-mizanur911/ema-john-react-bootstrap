import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart } from '../../utilities/fakedb';
import useCart from '../../utilities/useCart';
import useProducts from '../../utilities/useProducts';
import Cart from '../Cart/Cart';
import OrderedProducts from '../OrderedProducts/OrderedProducts';

const OrderReview = (props) => {
    const [products] = useProducts();
  const [cart] = useCart(products);
  const history = useHistory();

  const handleOrderNow = () => {
    history.push('./placeorder');
    clearTheCart();
  }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="products-container col-md-10 border-end border-3">
            {cart.map((product) => (
              <OrderedProducts
                key={product.key}
                product={product}
              ></OrderedProducts>
            ))}
          </div>
          <div className="cart-container col-md-2">
            <Cart key={cart.key} cart={cart}>
              <button
                className="btn btn-warning border border-1 border-dark"
                type="button"
                onClick={handleOrderNow}
              >
                Order Now
              </button>
            </Cart>
          </div>
        </div>
      </div>
    );
};

export default OrderReview;