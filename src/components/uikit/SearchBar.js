import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../../constants/Colors'

const SearchBar = ({
  onPressRight,
  iconRight,
  colorRight,
  onChangeText,
  placeholder,
  value,
  onBlur
}) => {
  const { container, sub, iconRightStyle, inputStyle, searchStyle } = styles
  return (
    <SafeAreaView style={{backgroundColor: '#1E90FF'}}>
      <View style={container}>
        <View style={sub}>
          <TextInput
            underlineColorAndroid='transparent'
            style={inputStyle}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
          />
          { value !== '' &&
            <TouchableOpacity onPress={onPressRight}>
              <View style={searchStyle}>
                <MaterialCommunityIcons
                  name={iconRight}
                  style={[iconRightStyle, { color: colorRight }]}
                />
              </View>
            </TouchableOpacity>
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.noticeBackground,
    paddingHorizontal: 20,
    position: 'relative'
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26,
    alignItems: 'center',
    width: 300,
    backgroundColor: '#fff',
    height: 30,
    borderRadius: 20
  },
  inputStyle: {
    fontSize: 18,
    height: 23,
    width: 200,
    marginLeft: 15,
    backgroundColor: '#fff'
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 20
  },
  iconRightStyle: {
    fontSize: 20
  }
})

export { SearchBar }
