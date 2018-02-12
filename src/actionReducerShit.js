// ACTION FETCH

export const fetchRecipeById = (id) => {
  return dispatch => {
    const path = `/recipes/${id}`
    // dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_RECIPE, payload: res.body }))
      // .catch(err => dispatch(loadError(err)))

    // dispatch(loading(path, false))
  }
}


// Reducers SHIT

import { FETCHED_ONE_RECIPE } from '../actions/recipes/fetch'

case FETCHED_ONE_RECIPE :
  return [payload].concat(state)



// RecipItem Link

import { Link } from 'react-router-dom'

<h1 className="recipeTitle">
  <Link  to={`/recipes/${_id}`}> <<<<<<<<<<<<<<<< Link
  { title }
  </Link>
</h1>


// RecipePage import JE fetchRecipeById van actions folder

componentWillMount() {
  this.props.fetchRecipeById(this.props.match.params.recipeId)
}



  // Fuckedup Link IN App.js
  import { withRouter } from 'react-router'

// code

  export default withRouter(App)
