import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class LikeButton extends PureComponent {
  static propTypes = {
    onchange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  //  toggleLike() {
//   this.setState({
//   })
// }

  toggleLike() {
    this.props.onChange()
    console.log('Like button clicked!')
  }

  render() {
    const { liked } = this.props
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
