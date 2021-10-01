import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">Display {this.props.count} products</div>
                <div className="filter-sort">Order
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="0">Lastest</option>
                        <option value="1">Lowest</option>
                        <option value="2">Highest</option>
                    </select>
                </div>
                <div className="filter-size">Filter
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="XS">
                            XS
                        </option>
                        <option value="M">
                            M
                        </option>
                        <option value="XL">
                            XL
                        </option>
                    </select>
                </div>
            </div>
        )
    }
}
