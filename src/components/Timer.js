import React from 'react'
import { connect } from 'react-redux'

const Timer = ({timer}) => {
    return (
        <div>
            {timer && <div>hello</div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        timer: state.setTimer.timer
    }
}

export default connect(mapStateToProps)(Timer)