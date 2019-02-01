import { createStackNavigator } from 'react-navigation'
import SignInForm from './SignIn'
import { SIGNIN, SIGNUP } from '../routes'

export default createStackNavigator(
  {
    [SIGNIN]: SignInForm,
    [SIGNUP]: SignInForm
  },
  {
    headerMode: 'none'
  }
)
