import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRecipeById } from '../actions/recipes/fetch'
import Title from '../components/Title'


export class RecipePage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    // _id: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired,
    // summary: PropTypes.string.isRequired,
    // vegan: PropTypes.bool,
    // vegetarian: PropTypes.bool,
    // pescatarian: PropTypes.bool,
    // liked: PropTypes.bool,
    // photo: PropTypes.string.isRequired
    // ingredients: PropTypes.arrayOf()
  }

  componentWillMount() {
    this.props.fetchRecipeById(this.props.match.params.recipeId)
  }

  render() {
    const { _id, photo, title, summary, vegan, vegetarian, pescatarian, liked } = this.props

    if (!_id) return null

    return(
      <div className="recipe page">
        <Title content={ title } />
        <span className="idRecipePage">{ _id }</span>
        { photo }
        <h2> { summary }</h2>
        { vegan }
        { vegetarian }
        { pescatarian }
        { liked }

      </div>
    )
  }
}

const mapStateToProps = ({ recipes }, { match }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === match.params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

export default connect(mapStateToProps, { fetchRecipeById } )(RecipePage)
