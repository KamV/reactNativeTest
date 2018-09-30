import React from 'react'
import { Text } from 'react-native'

class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style]} />
  }
}

export { MonoText }
