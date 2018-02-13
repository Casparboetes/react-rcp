import ApiClient from '../../api/client'
import { history } from '../../store'

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new ApiClient()

export default () => {
  api.signOut()
  history.push('/sign-in')
  return {
    type: USER_SIGNED_OUT,
    payload: null
  }
}
