import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

class TextField extends Component {
  render() {
    const { input: { value, onChange, borderColor, borderWidth, onFocus }, ...otherProps } = this.props
    const { inputBox } = styles
    return (
      <TextInput
        underlineColorAndroid='transparent'
        style={[inputBox, { borderColor, borderWidth }]}
        onChangeText={text => onChange(text)}
        onFocus={onFocus}
        value={value}
        selectTextOnFocus
        {...otherProps}
      />
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: 'black',
    margin: 10
  }
})

export { TextField }
