import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button, Text } from 'react-native-elements'
import { onSignOut } from '../../../actions'

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Аккаунт'
  };

  state = {
    userName: 'Камиль Валиуллин',
    avatar: 'КВ'
  }

  handleSignOut = () => {
    this.props.onSignOut(this.props.navigation)
  }

  render() {
    const { userName, avatar } = this.state
    const { container, avatarContainer, avatarText } = styles
    return (
      <View style={container}>
        <Card title={userName}>
          <View style={avatarContainer}>
            <Text style={avatarText}>{avatar}</Text>
          </View>
          <Button
            backgroundColor="#03A9F4"
            title="Выйти"
            onPress={this.handleSignOut}
          />
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  avatarContainer: {
    backgroundColor: '#bcbec1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 20
  },
  avatarText: {
    color: 'white',
    fontSize: 24
  }
})

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, { onSignOut })(SettingsScreen)
