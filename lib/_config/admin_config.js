/**
 * Created by olha on 05.09.16.
 */

/* global Products: true, Categories: true, Types: true,
   Brands: true, Cart: true, AdminConfig: true  */
/* eslint no-undef: "error" */

import { Products as _Products } from '../../imports/api/products/products';
Products = _Products;

import { Lists as _Categories } from '../../imports/api/lists/lists';
Categories = _Categories;

import { Types as _Types } from '../../imports/api/types/types';
Types = _Types;

import { Brands as _Brands } from '../../imports/api/brands/brands';
Brands = _Brands;

import { Cart as _Cart } from '../../imports/api/cart/cart';
Cart = _Cart;

AdminConfig = {
  name: 'Archery',
  adminEmails: ['olha@gmail.com', 'helga@gmail.com'],
  collections: {
    Products: {
      color: 'red',
      icon: 'pencil',
      extraFields: ['owner'],
      tableColumns: [
        {
          label: 'Product name',
          name: 'name',
        },
        {
          label: 'Category',
          name: 'category.name',
        },
        {
          label: 'Type',
          name: 'type',
        },
        {
          label: 'Brand',
          name: 'brand',
        },
      ],
    },
    Categories: {
      color: 'orange',
      icon: 'list',
      extraFields: ['owner'],
      tableColumns: [
        {
          label: 'Category name',
          name: 'name',
        },
      ],
    },
    Types: {
      color: 'green',
      icon: 'random',
      extraFields: ['owner'],
      tableColumns: [
        {
          label: 'Type name',
          name: 'name',
        },
      ],
    },
    Brands: {
      color: 'yellow',
      icon: 'arrows',
      extraFields: ['owner'],
      tableColumns: [
        {
          label: 'Brand name',
          name: 'name',
        },
      ],
    },
    Cart: {
      color: 'aqua',
      icon: 'shopping-cart',
      extraFields: ['owner'],
      tableColumns: [
        /*				{
         label: 'Brand name',
         name: 'name'
         },*/
      ],
    },
  },
  dashboard: {
    homeUrl: '/',
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt'],
  },
};

