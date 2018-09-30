import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import w from '../../../constants/Layout'
import Colors from '../../../constants/Colors'

const Header = ({
  title,
  onPressLeft,
  iconLeft,
  colorLeft,
  onPressRight,
  iconRight,
  colorRight
}) => {
  const { container, textStyle, iconLeftStyle, iconRightStyle } = styles
  return (
    <SafeAreaView style={{backgroundColor: '#1E90FF'}}>
      <View style={container}>
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
        </TouchableOpacity>
        <Text numberOfLines={1} ellipsizeMode='tail' style={textStyle}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, { color: colorRight }]} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: Colors.noticeBackground,
    paddingHorizontal: 20,
    position: 'relative'
  },
  textStyle: {
    marginTop: 30,
    width: w - 75,
    fontFamily: 'notoserif',
    color: '#fff',
    fontSize: 18
  },
  iconLeftStyle: {
    marginTop: 26,
    fontSize: 35
  },
  iconRightStyle: {
    marginTop: 26,
    fontSize: 35,
    marginRight: 3
  }
})

export { Header }
