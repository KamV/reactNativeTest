import { AsyncStorage } from 'react-native'
import {
  AUTH_USER,
  UNAUTH_USER,
  SIGNIN_FAILURE
} from '../types'
import { AUTH, MAIN } from '../components/navigation/routes'

const URL = 'http://31.184.252.108/api/'

let USER_TOKEN = 'auth-demo-key'

const onSignIn = (values, navigation) => async (dispatch) => {
  const {email, password} = values
  function onSuccess(success) {
    if (success.status === 200) {
      // const text = success.response.json()
      // alert(`Результат запроса ${text}`)
      USER_TOKEN = 'auth-demo-key'
      AsyncStorage.setItem(USER_TOKEN, 'true')
      dispatch({ type: AUTH_USER })
      navigation.navigate(MAIN)
    }
  }
  function onError(error) {
    dispatch({ type: SIGNIN_FAILURE, payload: error })
  }
  try {
    const api = 'login'
    const res = await fetch(URL + api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const success = await res
    return onSuccess(success)
  } catch (error) {
    return onError(error)
  }
}

// export const onSignUp = () => AsyncStorage.setItem(USER_TOKEN, 'true')

const onSignOut = (navigation) => async (dispatch) => {
  AsyncStorage.removeItem(USER_TOKEN)
  dispatch({ type: UNAUTH_USER })
  navigation.navigate(AUTH)
}

const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_TOKEN)
      .then(res => {
        if (res !== null) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(err => reject(err))
  })
}

export { onSignIn, onSignOut, isSignedIn }
