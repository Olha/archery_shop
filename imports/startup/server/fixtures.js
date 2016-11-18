import { Meteor } from 'meteor/meteor';
import { Lists } from '../../api/lists/lists.js';
import { Products } from '../../api/products/products.js';
import { Brands } from '../../api/brands/brands.js';
import { Types } from '../../api/types/types.js';
/* import { Cart } from '../../api/cart/cart'; */

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  /*  Lists.remove({});
   Products.remove({});
   Brands.remove({});
   Types.remove({});
   Cart.remove({});*/
  if (Lists.find().count() === 0) {
    const data = [
      {
        name: 'Bows',
        items: [
          {
            name: 'The best bow of the world',
            category: { name: 'bow' },
            description: 'smth about bow',
            full_description: 'full description',
            price: { currency: '$', value: 5000 },
            brand: 'PSE',
            type: 'classic',
            img: [{ position: 0, title: 'bow', filePath: './img/some.jpg',
              url: './img/some.jpg', width: 200, height: 100, bytes: 30 }],
            video: [{ position: 0, title: 'bow', filePath: './video/some.jpg',
              url: './video/some.jpg', width: 400, height: 200, bytes: 300 }],
            sex: 'male',
            properties: {},
            count: 10,
            comments: [],
          },
          {
            name: 'The best bow of the world2',
            category: { name: 'bow' },
            description: 'smth about bow',
            full_description: 'full description',
            price: { currency: '$', value: 5000 },
            brand: 'MATHEWS',
            type: 'compound',
            img: [{ position: 0, title: 'bow', filePath: './img/some.jpg',
              url: './img/some.jpg', width: 200, height: 100, bytes: 30 }],
            video: [{ position: 0, title: 'bow', filePath: './video/some.jpg',
              url: './video/some.jpg', width: 400, height: 200, bytes: 300 }],
            sex: 'male',
            properties: {},
            count: 10,
            comments: [],
          },
        ],
      },
      {
        name: 'Arrows',
        items: [
          {
            name: 'The best arrow of the world',
            category: { name: 'arrows' },
            description: 'smth about bow',
            full_description: 'full description',
            price: { currency: '$', value: 5000 },
            brand: 'Bear Archery',
            type: 'compound',
            img: [{ position: 0, title: 'bow', filePath: './img/some.jpg',
              url: './img/some.jpg', width: 200, height: 100, bytes: 30 }],
            video: [{ position: 0, title: 'bow', filePath: './video/some.jpg',
              url: './video/some.jpg', width: 400, height: 200, bytes: 300 }],
            sex: 'male',
            properties: {},
            count: 10,
            comments: [],
          },
          {
            name: 'The best bow of the world2',
            category: { name: 'arrows' },
            description: 'smth about bow',
            full_description: 'full description',
            price: { currency: '$', value: 5000 },
            brand: 'Bear Archery',
            type: 'classic',
            img: [{ position: 0, title: 'bow', filePath: './img/some.jpg',
              url: './img/some.jpg', width: 200, height: 100, bytes: 30 }],
            video: [{ position: 0, title: 'bow', filePath: './video/some.jpg',
              url: './video/some.jpg', width: 400, height: 200, bytes: 300 }],
            sex: 'male',
            properties: {},
            count: 10,
            comments: [],
          },
        ],
      },
    ];
    const brands = [
      {
        name: 'Bear Archery',
      },
      {
        name: 'BOWTECH',
      },
      {
        name: 'Hoyt',
      },
      {
        name: 'PSE',
      },
      {
        name: 'MATHEWS',
      }];
    const types = [
      {
        name: 'compound',
      },
      {
        name: 'classic',
      },
    ];
    brands.forEach((brand) => {
      Brands.insert({
        name: brand.name,
      });
    });
    types.forEach((type) => {
      Types.insert({
        name: type.name,
      });
    });
    let timestamp = (new Date()).getTime();
    data.forEach((list) => {
      const listId = Lists.insert({
        name: list.name,
        incompleteCount: list.items.length,
      });
      list.items.forEach((item) => {
        const type = Types.findOne({ name: item.type });
        const brand = Brands.findOne({ name: item.brand });
        Products.insert({
          listId,
          name: item.name,
          category: {
            name: item.category.name,
          },
          description: item.description,
          full_description: item.full_description,
          price: item.price,
          brand: brand._id,
          type: type._id,
          img: item.img,
          video: item.video,
          sex: item.sex,
          properties: item.properties,
          count: item.count,
          comments: item.comments,
          createdAt: new Date(timestamp),
        });
        timestamp += 1; // ensure unique timestamp.
      });
    });
  }
});
