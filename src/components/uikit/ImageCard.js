import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { w } from '../../../constants/Layout'

const ImageCard = ({ data, onPress }) => {
  const { container, sub, h1, cover } = styles
  const { image, name } = data
  const img = image === null ? 'https://fcrmedia.ie/wp-content/themes/fcr/assests/images/delault.jpg' : `https${image.medium.slice(4)}`
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image
            style={cover}
            source={{uri: img}}
          />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  sub: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 15
  },
  h1: {
    paddingTop: 5,
    fontFamily: 'notoserif',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  }
})

export { ImageCard }
