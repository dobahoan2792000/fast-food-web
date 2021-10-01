import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";
import Cart from './components/Cart'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: "",
    };
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyIncart = false
    cartItems.forEach(item => {
      if(item.id === product.id)
        {
          item.count++;
          alreadyIncart = true
        }
    })
    if(!alreadyIncart){
      cartItems.push({...product,count : 1})
    }
    this.setState({
      cartItems: cartItems
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }

  removeFromCart = (product) => {
    let cartItems = this.state.cartItems.slice()
    cartItems = cartItems.filter(p => p.id !== product.id)
    this.setState({
      cartItems:cartItems
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

  }
  sortProducts = (e) => {
    let sort = e.target.value;
    this.setState({
      sort: sort,
      products: data.products.slice().sort((a, b) => 
        sort === "1"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "2"
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
      )
    });
  };
  filterProducts = (e) => {
    this.setState({
      size: e.target.value,
      products: data.products.filter((p) => p.sizes.includes(e.target.value)),
    });
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Fast food</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} addToCart={this.addToCart}/>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
            </div>
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
