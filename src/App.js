import React, { PureComponent } from 'react'
import Routes from  './routes'
import { withRouter } from 'react-router'

class App extends PureComponent {
  // updateRecipe = (id, updates) => {
    // console.log('Calling UpdateRecipe inside App with arguments:')
    // console.table({ _id, updates })
    //
    // this.setState({
    //   recipes: this.state.recipes.map((recipe) => {
    //     if (recipe._id === _id) {
    //       return { ...recipe, ...updates }
    //     }
    //     return recipe
    //   })
    // })
  // }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}


//  This Forces Links to update!!! <<
export default withRouter(App)
//
// <RecipesContainer
// updateRecipe={this.updateRecipe.bind(this) } />
