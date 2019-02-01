import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Field, reduxForm } from 'redux-form'
import { onSignIn } from '../../../actions'
import { SIGNUP } from '../../navigation/routes'
import { TextField } from '../../uikit'
import { w } from '../../../../constants/Layout'

class SignIn extends Component {
  static navigationOptions = {
    title: 'Auth'
  };

  state = {
    errorEmail: false,
    errorPassword: false
  }

  // emailValidator = value => {
  //   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  //   'Invalid email address' : undefined
  // }

  emailValidator = value => {
    if (value === undefined) {
      this.setState({ errorEmail: true })
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(value)) {
      this.setState({ errorEmail: true })
    }
  }

  passwordValidator = value => {
    if (value === undefined) {
      this.setState({ errorPassword: true })
    } else if (value.length < 5) {
      this.setState({ errorPassword: true })
    }  
  }

  pressRegistrationButton = () => {
    this.props.navigation.navigate(SIGNUP)
  }

  handleAuthFormSubmit = (values) => {
    this.emailValidator(values.email)
    this.passwordValidator(values.password)
    if (!this.state.errorEmail && !this.state.errorPassword) {
      this.props.onSignIn(values, this.props.navigation)
    }
  }

  render() {
    const { errorEmail, errorPassword } = this.state
    const { handleSubmit } = this.props
    const { backgroundImage, container, sub, buttonStyle } = styles
    return (
      <ImageBackground
        source={require('../../../../assets/images/backgroundImage.jpg')}
        resizeMode='cover'
        style={backgroundImage}
      >
        <View style={container}>
          <View style={sub}>
            <Field
              name="email"
              type="email"
              label="Email"
              placeholder="Введите Email"
              keyboardType="email-address"
              borderColor={errorEmail ? 'red' : 'black'}
              borderWidth={errorEmail ? 1 : 0}
              onFocus={() => this.setState({errorEmail: false})}
              component={TextField}
            />
            <Field
              name="password"
              type="password"
              label="Пароль"
              placeholder="Введите Пароль"
              keyboardType="default"
              borderColor={errorPassword ? 'red' : 'black'}
              borderWidth={errorPassword ? 1 : 0}
              onFocus={() => this.setState({errorPassword: false})}
              secureTextEntry
              component={TextField}
            />

            <Button
              buttonStyle={buttonStyle}
              backgroundColor="#03A9F4"
              title="Войти"
              onPress={handleSubmit(this.handleAuthFormSubmit)}
            />
          </View>
          <Button
            backgroundColor="transparent"
            textStyle={{ color: '#bcbec1' }}
            title="Зарегистрироваться"
            onPress={this.pressRegistrationButton}
          />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: w * 0.4
  },
  sub: {
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: w
  },
  buttonStyle: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20
  }
})

const SignInForm = reduxForm({
  form: 'signin'
})(SignIn)

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}

export default connect(mapStateToProps, { onSignIn })(SignInForm)
