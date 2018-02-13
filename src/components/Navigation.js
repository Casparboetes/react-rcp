import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import signOut from '../actions/user/sign-out'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <nav className="navigation">
        <ul>
          <li><Link to="/"><button>Home</button></Link></li>
          <li><button>
            { signedIn ?
              <a href="" onClick={this.signOut.bind(this)}>Sign out</a> :
              <Link to="/sign-up">Sign up</Link>
            }
          </button></li>
          <li><Link to={`/sign-in`}> <button> Sign In </button> </Link></li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
