import { createSwitchNavigator } from 'react-navigation'

import AuthStackNavigator from '../screens/Authorization'
import MainTabNavigator from './MainTabNavigator'
import { AUTH, MAIN } from './routes'

export const createAppNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      [AUTH]: AuthStackNavigator,
      [MAIN]: MainTabNavigator
    },
    {
      initialRouteName: signedIn ? 'MAIN' : 'AUTH'
    }
  )
}
