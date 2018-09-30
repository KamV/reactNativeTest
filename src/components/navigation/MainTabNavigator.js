import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import { TabBarIcon } from '../uikit'
import HomeStack from '../screens/HomeScreen'
import LinksStack from '../screens/LinksScreen'
import SettingsStack from '../screens/SettingsScreen'

HomeStack.navigationOptions = {
  tabBarLabel: 'Лента',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  )
}

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  )
}

export default createBottomTabNavigator({
  LinksStack,
  HomeStack,
  SettingsStack
},
{
  initialRouteName: 'HomeStack'
})
