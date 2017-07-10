import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <View />
        <View style={styles.cardHeaderStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

AlbumDetail.propTypes = {
  album: PropTypes.object
}

const styles = {
  cardHeaderStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default AlbumDetail
