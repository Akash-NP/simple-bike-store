import React from "react";
import { connect } from "react-redux";
import {
  INCREASE,
  DECREASE,
  
  
  
} from "../constatnts";
const CartItem = ({
  img,
  name,
  price,
  amount,
  
  increase,
  decrease,
  
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">{price} Lakh</h4>
        
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>ADD
         
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => decrease()}>REMOVE
            
          
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;

  return {
    
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
