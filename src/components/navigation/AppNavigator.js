import { createSwitchNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'

const TabNavigator = createSwitchNavigator({
  Main: MainTabNavigator
})

export { TabNavigator }
