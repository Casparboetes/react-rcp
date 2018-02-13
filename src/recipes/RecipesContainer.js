import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem, { recipeItemShape } from './RecipeItem'
import RecipeEditor from './RecipeEditor'
import { fetchRecipes } from '../actions/recipes/fetch'
import './RecipesContainer.css'
import Navigation from '../components/Navigation'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeItemShape).isRequired,
    // updateRecipe: PropTypes.func.isRequired,

  }


  componentWillMount() {
  //this.props.dispatch(fetchRecipes())
  this.props.fetch() // see mapDispatchToProps below
  }

  renderRecipe(recipe, index) {
    return (
      <RecipeItem key={index} /*updateRecipe={this.props.updateRecipe}*/ { ...recipe }
      />
    )
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header className="renderHeader">
        <Navigation />
          <Title content="All Recipes" />
        </header>
        <main className="renderMain">
          <RecipeEditor className="editor" />
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
        <footer className="renderFooter">
        </footer>
      </div>
    )
  }
}

// Same as:
// const mapStoreToProps = (store) => {
//   return { recipes: store.recipes }
// }

const mapStateToProps = ({ recipes }) => ({ recipes })
const mapDispatchToProps = { fetch: fetchRecipes }


export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
