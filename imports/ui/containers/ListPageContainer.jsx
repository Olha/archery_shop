import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Lists } from '../../api/lists/lists.js';
import { Products } from '../../api/products/products.js';
import { Brands } from '../../api/brands/brands.js';
import { Types } from '../../api/types/types.js';
import { createContainer } from 'meteor/react-meteor-data';
import ListPage from '../pages/ListPage.jsx';
import { Cart } from '../../api/cart/cart'

export default ListPageContainer = createContainer(({ params: { id } }) => {
  let isContained, products, productsHandle;
  if (Boolean(id)) {
    productsHandle = FlowRouter.subsReady('listProducts');
    if (productsHandle) {
      const list = Lists.findOne({_id: id});
      isContained = Boolean(list);
      products = list.products().fetch();
    }
  } else {
    productsHandle = FlowRouter.subsReady('allListProducts');
    if (productsHandle) {
      const product = Products.find({}, {limit: 1}).fetch();
      isContained = Boolean(product.length);
      products = Products.find({}).fetch();
    }
  }
  const isExistPage = productsHandle && isContained;

  //for filtering
  const cart = Cart.findOne();
  const lists = Lists.find().fetch();
  const brands = Brands.find({}).fetch();
  const types = Types.find({}).fetch();
  return {
    loading: !productsHandle,
    isExistPage,
    products: isExistPage ? products : [],
    cart,
    lists,
    brands,
    types
  };
}, ListPage);
