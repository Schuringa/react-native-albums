import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album
  const { thumbnailStyle, cardHeaderStyle } = styles
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={cardHeaderStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
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
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}

export default AlbumDetail
