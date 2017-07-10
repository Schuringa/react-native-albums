import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import Card from './Card'

const AlbumDetail = props => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  )
}

AlbumDetail.propTypes = {
  album: PropTypes.object
}

export default AlbumDetail
