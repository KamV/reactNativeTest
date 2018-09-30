import { createStackNavigator } from 'react-navigation'
import LinksScreen from './LinksScreen'
import { USER_LINKS } from '../routes'

export default createStackNavigator(
  {
    [USER_LINKS]: LinksScreen
  },
  {
    headerMode: 'none'
  }
)
