import React from 'react';

const OrderedProducts = (props) => {
    // const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
    const { product } = props;
    const { name, seller, stock, price, img, quantity } = product;
    return (
      <div className="d-md-flex ps-5 border-bottom border-3 text-start">
        <div className="mx-3">
          <img src={img} alt="" />
        </div>

        <div className="mb-3">
          <h4 className="fw-normal text-primary">{name}</h4>
          <p>By : {seller}</p>
          <p>Price : ${price}</p>
          <p>Quantity : {quantity}</p>
          <p>
            <small>only {stock} left in stock - order soon</small>
          </p>
        </div>
      </div>
    );
};

export default OrderedProducts;