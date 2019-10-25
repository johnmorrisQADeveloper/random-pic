import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Timer = ({ timer, value }) => {

    const [imageChangeCounter, setImageChangeCounter] = useState(5)
    const [totalCounter, setTotalCounter] = useState(60)

    useEffect(() => {
        if (timer !== '' && timer !== false) {
            const imageChangeCounterInterval = setInterval(() => {
                setImageChangeCounter(imageChangeCounter => imageChangeCounter - 1)
            }, 1000)

            return () => {
                clearInterval(imageChangeCounterInterval)
                setImageChangeCounter(5)
            }
        }
    }, [timer])

    useEffect(() => {
        if (timer !== '' && timer !== false) {
            const totalCounterInterval = setInterval(() => {
                setTotalCounter(totalCounter => totalCounter - 1)
            }, 1000)

            return () => {
                clearInterval(totalCounterInterval)
                setTotalCounter(60)
            }
        }
    }, [timer])

    return (
        <div>
            <br />
            {<span>Image changing in {imageChangeCounter} seconds</span>}
            <br />
            {<span>Total Time remaining {totalCounter} seconds</span>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        timer: state.setTimer.timer,
        value: state.setTimer.value
    }
}

export default connect(mapStateToProps)(Timer)
