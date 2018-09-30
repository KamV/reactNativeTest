import React, { PureComponent } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { Header, ImageBigCard } from '../../uikit'

class DetailsScreen extends PureComponent {
  render() {
    const { image, name, summary } = this.props.navigation.state.params
    const { navigation } = this.props
    const data = { image }
    const { container, h1, h2, sub } = styles
    return (
      <View style={container}>
        <Header
          detail
          onPressLeft={() => navigation.goBack()}
          iconLeft='ios-arrow-back'
          colorLeft='#fff'
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 70,
    backgroundColor: '#fff'
  },
  h1: {
    fontFamily: 'notoserif',
    fontSize: 18,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'notoserif',
    fontSize: 15,
    padding: 15,
    color: 'grey',
    paddingHorizontal: 15,
    textAlign: 'center'
  }
})

export default DetailsScreen
