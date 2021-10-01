import React from 'react';
import useCart from '../../utilities/useCart';
import useProducts from '../../utilities/useProducts';
import Cart from '../Cart/Cart';
import OrderedProducts from '../OrderedProducts/OrderedProducts';
import Product from '../Product/Product';

const OrderReview = (props) => {
    const [products] = useProducts();
    const [cart] = useCart(products);
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
            <Cart key={cart.key} cart={cart}></Cart>
          </div>
        </div>
      </div>
    );
};

export default OrderReview;