import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegetarian from '../images/vegetarian.svg'
import Vegan from '../images/vegan.svg'
import LikeButton from '../components/LikeButton'
import { Link } from 'react-router-dom'
import './RecipeItem.css'


export const recipeItemShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool,
  photo: PropTypes.string.isRequired
})

class RecipeItem extends PureComponent {
  static propTypes = {
    ...recipeItemShape.isRequired,
    // updateRecipe: PropTypes.func.isRequired
  }

  // toggleLike = () => {
  //   console.log('Calling toggleLike inside RecipeItem!')
  //   const { updateRecipe, _id, liked } = this.props
  //   updateRecipe(_id, { liked: !liked })
  // }

  toggleLike = () => {
   const { _id } = this.props
   this.props.toggleLikeRecipe(_id)
 }

 // forceUpdateHandler(){
 //   this.forceUpdate()
 // }

 // onClick={this.forceUpdateHandler.bind(this)}

  render() {
    const { _id, photo, title, summary, vegan, vegetarian, pescatarian, liked } = this.props

    return(
          <article className="recipe">
            <header>
        
              <h1 className="recipeTitle">
              { title }
              </h1>

              <Link  to={`/recipes/${_id}`}>

              <div className="cover" style={{ backgroundImage: `url('${photo}')` }} />
              </Link>

              <ul>
                { pescatarian && <li><img style={{ height : '4em' }} src={ Pescatarian } alt="pescatarian"/></li>  }
                { vegan && <li><img style={{ height : '4em' }} src={ Vegan } alt="vegan"/></li> }
                { !vegan && vegetarian && <li><img style={{ height : '4em' }} src={ Vegetarian } alt="vegetarian"/></li> }

              </ul>
            </header>
            <div>
              <p className="recipeText">{ summary }</p>
            </div>
            <footer>
              <LikeButton
              onClick={this.toggleLike}
              liked={liked}
              />
            </footer>

          </article>
        )
  }
}

export default RecipeItem
