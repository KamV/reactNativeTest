import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, StyleSheet } from 'react-native'
import { searchChanged, getEvents } from '../../../actions'
import { Header, ImageCard, SearchBar } from '../../uikit'
import { EVENT_DETAIL } from '../routes'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'События'
  }

  state = {
    data: [],
    visibleSearchBar: false
  }

  componentDidMount = () => {
    this._onChangeText('stargate')
  }

  _onChangeText = text => {
    this.props.searchChanged(text)
    this.props.getEvents(text)
  }

  clearSearch = () => {
    this._onChangeText('')
  }

  render() {
    const { visibleSearchBar } = this.state
    const { navigation, searchValue, data } = this.props
    const { scrollContainer, container } = styles
    return (
      <View>
        {
          visibleSearchBar ?
            <SearchBar
              colorRight={'#ccc'}
              iconRight='close'
              placeholder='Search'
              onChangeText={this._onChangeText}
              value={searchValue}
              onPressRight={this.clearSearch}
              onBlur={() => this.setState({visibleSearchBar: false})}
            /> :
            <Header
              colorRight={'#fff'}
              iconRight='magnify'
              onPressRight={() => this.setState({visibleSearchBar: true})}
            />
        }
        <ScrollView style={scrollContainer}>
          <View style={container}>
            {
              data.map(item => (
                <ImageCard
                  data={item.show}
                  key={item.show.id}
                  onPress={() => navigation.navigate(EVENT_DETAIL, (item.show))}
                />
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff'
  },
  container: {
    backgroundColor: '#fff',
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 70
  }
})

const mapStateToProps = state => {
  return {
    searchValue: state.search.searchValue,
    data: state.events.data
  }
}

export default connect(mapStateToProps, { searchChanged, getEvents })(HomeScreen)
