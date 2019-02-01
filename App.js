import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import { createAppNavigator } from './src/components/navigation/AppNavigator'
import { isSignedIn } from './src/actions'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default class App extends React.Component {
  state = {
    signedIn: false,
    checkedSignIn: false
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => console.log(err))
  }

  render() {
    const { checkedSignIn, signedIn } = this.state
    if (!checkedSignIn) {
      return null
    }
    const Layout = createAppNavigator(signedIn)
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Layout />
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
