import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class LikeButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    liked: PropTypes.bool,
    //onClick: PropTypes.func.isRequired,
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  render() {
    // onClick can be inserted below in const
    const { liked, onClick  } = this.props
    return (
      <div className={ this.classNames() }>
        <button onClick={ onClick }>
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
