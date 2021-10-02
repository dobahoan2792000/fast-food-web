import React, { Component } from "react";
import { format } from "../utils/formatCurrency.js";
import { Fade, Zoom } from "react-awesome-reveal";
import Modal from "react-modal";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    console.log("Hallo");
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade direction="up" cascade={true}>
          <div>
            <ul className="products">
              {this.props.products.map((product) => (
                <li key={product.id}>
                  <div className="product">
                    <a href="#" onClick={() => this.openModal(product)}>
                      <img src={product.images} />
                      <p>{product.title}</p>
                    </a>
                    <div className="price">
                      <div>{format(product.price)}</div>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.props.addToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Fade>
        {product && (
          <Modal
            isOpen={true}
            onRequestClose={this.closeModal}
            ariaHideApp={false}
          >
            <Zoom>
              <button onClick={this.closeModal}>Close</button>
              <div className="product-detail">
                  <img src={product.images}/>
                  <div className="product-detail-desc">
                      <p><strong>{product.title}</strong></p>
                      <p><strong>{product.description}</strong></p>
                      <p>
                          Available sizes
                          {product.sizes.map(x => (
                              <span>{ " " } <button>{x}</button></span>
                          ))}
                      </p>
                      <div className="product-price">
                          <div>
                              { format(product.price) }
                          </div>
                          <button className="btn" onClick={() => {
                              this.props.addToCart(product)
                              this.closeModal();
                          }}>Add to cart</button>
                      </div>
                  </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
