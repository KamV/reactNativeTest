import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import { TabNavigator } from './src/components/navigation'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default class App extends React.Component {
  state = {
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TabNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
