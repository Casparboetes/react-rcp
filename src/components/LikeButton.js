import React, { PureComponent } from 'react'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class LikeButton extends PureComponent {
    constructor() {
    super()

    this.state = {
      liked: false
    }
  }

  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.setState({
      liked : !this.state.liked
    })
    console.log('Like button clicked!')
  }

  render() {
    const { liked } = this.state
    return (
      <div className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="heart" alt="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
          <img className="heart" alt="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
          <span className="likes">{ liked ? 'You like this' : null }
          </span>
      </div>

    )
  }
}

export default LikeButton
