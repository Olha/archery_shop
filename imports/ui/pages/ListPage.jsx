import React from 'react';
import ProductsFilter from '../components/ProductsFilter.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Message from '../components/Message.jsx';
import { _ } from 'meteor/underscore';

export default class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingProduct: null,
    };
    this.onEditingChange = this.onEditingChange.bind(this);
  }
  onEditingChange(id, editing) {
    this.setState({
      editingProduct: editing ? id : null,
    });
  }
  render() {
    const { isExistPage, loading, products, lists, brands, types, cart } = this.props;
    if (Boolean(cart) && Boolean(products.length)) {
      _.map(cart.products, (elem) => {
        const product = _.findWhere(products, { _id: elem.item });
        if (product) {
          product.isAdded = true;
        }
      });
    }
    if (!isExistPage) {
      return <NotFoundPage />;
    }
    return (
      <div id="page-wrapper">
        { loading ? <Message title="Loading..." /> :
          <ProductsFilter
            lists={lists}
            brands={brands}
            products={products}
            types={types}
          /> }
      </div>
    );
  }
}

ListPage.propTypes = {
  lists: React.PropTypes.array,
  brands: React.PropTypes.array,
  types: React.PropTypes.array,
  products: React.PropTypes.array,
  loading: React.PropTypes.bool,
  isExistPage: React.PropTypes.bool,
  cart: React.PropTypes.any,
};

