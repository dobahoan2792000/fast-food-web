import React, { Component } from "react";
import { format } from "../utils/formatCurrency";
import { Fade } from 'react-awesome-reveal'

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} items
          </div>
        )}
        <div>
          <div className="cart">
            <Fade direction="left" delay={100} damping={0.2} cascade>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.images} alt={item.title} />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <div className="right">
                      {format(item.price) + "x" + item.count}
                      <button onClick={() => this.props.removeFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </Fade>
          </div>
          {cartItems.length === 0 ? <div></div> : <div className="cart">
              <div className="total">
                  <div>
                      Total : 
                      {format(cartItems.reduce((a,c) => a + c.price * c.count, 0))}
                  </div>
              </div>
          </div>}
        </div>
      </div>
    );
  }
}
