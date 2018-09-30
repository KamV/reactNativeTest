import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import { EVENT_HOME, EVENT_DETAIL } from '../routes'

export default createStackNavigator(
  {
    [EVENT_HOME]: HomeScreen,
    [EVENT_DETAIL]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)
