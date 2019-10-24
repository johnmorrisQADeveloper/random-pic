import React from 'react'
import { connect } from 'react-redux'

const Image = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl}></img>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        imageUrl: state.imageUrl.imageUrl
    }
}

export default connect(mapStateToProps)(Image)