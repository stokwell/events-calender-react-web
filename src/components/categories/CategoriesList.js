import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import { fetchCategories } from '../../actions/categoriesActions';


class CategoriesList extends Component {
  componentDidMount(){
    this.props.fetchCategories()
  }
  render() {
    console.log(this.props)
    return (
      <div className="categories">
        <ul className="categories__list">
        {this.props.categories.map(category =>
          <Category key={category.id} category={category.name}/>
          )
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    categories: state.categoriesReducer
  }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesList);
