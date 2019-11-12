import React from 'react'
import { connect } from 'react-redux'
/* eslint react/prop-types: 0 */
const Image = ({ imageUrl }) => {
  return (
    <div>
      <img alt={imageUrl} src={imageUrl}></img>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imageUrl: state.imageUrl.imageUrl
  }
}

export default connect(mapStateToProps)(Image)
