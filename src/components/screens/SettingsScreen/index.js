import { createStackNavigator } from 'react-navigation'
import SettingsScreen from './SettingsScreen'
import { USER_SETTINGS } from '../routes'

export default createStackNavigator(
  {
    [USER_SETTINGS]: SettingsScreen
  },
  {
    headerMode: 'none'
  }
)
