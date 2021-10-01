import React, { Component } from 'react'
import { format } from '../utils/formatCurrency.js'
export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product.id}>
                            <div className="product">
                                <a href="#">
                                    <img src={product.images} /> 
                                    <p>{product.title}</p>
                                </a>
                                <div className="price">
                                    <div>{format(product.price)}</div>
                                    <button className="btn btn-primary" onClick={() => this.props.addToCart(product)}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
