import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'laptop',
  },
  {
    _id: uuid(),
    categoryName: 'phone',
  },
  {
    _id: uuid(),
    categoryName: 'earbuds',
  },
];
