import React from 'react';

const Category = (props) =>  (
  <li className="categories__item">
    <button>
       {props.category}
    </button>
  </li>
)

export default Category;