import React from 'react';
import ProductItem from '../components/ProductItem.jsx';
import Message from '../components/Message.jsx';
import { displayError } from '../helpers/errors.js';
import { _ } from 'meteor/underscore';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {
  filterProducts,
} from '../../api/products/methods';

export default class ProductsFilter extends React.Component {
  constructor(props) {
    super(props);
    const { brands, products, types } = props;
    const optionsBrand = this.makePreviewForSelect(brands);
    const optionsType = this.makePreviewForSelect(types);
    const filterKeys = {
      brand: null,
      type: null,
    };
    this.state = {
      filterKeys,
      optionsBrand,
      optionsType,
      disabled: false,
      searchable: false,
      clearable: true,
      products,
    };
  }
  updateValue(...props) {
    const [nameValue, newValue] = props;
    let filterKeysState = this.state.filterKeys;
    filterKeysState[nameValue] = newValue;
    const filterResults = {};
    _.map(filterKeysState, (val, key) => {
      if (Boolean(val)) {
        filterResults[key] = val;
      }
    });
    this.setState({
      filterKeys: filterKeysState,
      products: filterProducts.call(filterResults, displayError),
    });
  }
  makePreviewForSelect(outList) {
    outList = outList || [];
    outList.forEach((list) => {
      list.value = list._id;
      list.label = list.name;
    });
    return outList;
  }
  render() {
    let Products;
    if (!this.state.products || !this.state.products.length) {
      Products = (
        <Message
          title="No products here"
          subtitle="Change searching"
        />
      );
    } else {
      Products = this.state.products.map(product => (
        <ProductItem
          product={product}
          key={product._id}
        />
      ));
    }
    return (
      <div>
        <nav className="">
          <ul className="list-filter">
            <li>
              <span>Search by brand</span>
              <Select
                placeholder="Select brand ..."
                ref="stateSelectBrand"
                options={this.state.optionsBrand}
                simpleValue
                clearable={this.state.clearable}
                name="selected-state"
                disabled={this.state.disabled}
                value={this.state.filterKeys.brand}
                onChange={this.updateValue.bind(this, 'brand')}
                searchable={this.state.searchable}
              />
            </li>
            <li>
              <span>Search by type</span>
              <Select
                placeholder="Select type ..."
                ref="stateSelectType"
                options={this.state.optionsType}
                simpleValue
                clearable={this.state.clearable}
                name="selected-state"
                disabled={this.state.disabled}
                value={this.state.filterKeys.type}
                onChange={this.updateValue.bind(this, 'type')}
                searchable={this.state.searchable}
              />
            </li>
          </ul>
        </nav>
        <div className="content-scrollable list-items">
          { Products }
        </div>
      </div>
    );
  }
}

ProductsFilter.propTypes = {
  brands: React.PropTypes.array,
  products: React.PropTypes.array,
  types: React.PropTypes.array,
};

ProductsFilter.contextTypes = {
  router: React.PropTypes.object,
};

