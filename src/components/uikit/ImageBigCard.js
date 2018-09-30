import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { w } from '../../../constants/Layout'

const ImageBigCard = ({ data }) => {
  const { container, sub, cover } = styles
  const { image } = data
  const img = `https${image.medium.slice(4)}`
  return (
    <View style={container}>
      <View style={sub}>
        <Image
          style={cover}
          source={{uri: img}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  sub: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 15
  },
  cover: {
    width: w / 1.67,
    height: w * 0.9,
    borderRadius: 10
  }
})

export { ImageBigCard }
