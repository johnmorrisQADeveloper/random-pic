import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Timer = ({ timer, value }) => {

    const [imageChangeCounter, setImageChangeCounter] = useState(5)
    const [totalCounter, setTotalCounter] = useState(60)

    useEffect(() => {
        if (timer !== '' && timer !== false && value !== null) {
            const imageChangeCounterInterval = setInterval(() => {
                setImageChangeCounter(imageChangeCounter => imageChangeCounter - 1)
            }, 1000)

            return () => {
                clearInterval(imageChangeCounterInterval)
                setImageChangeCounter(5)
            }
        }
    }, [timer, value])

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
            <div className="ui statistics">
                <div className="statistic">
                    <div className="value">
                        {imageChangeCounter}
                    </div>
                    <div className="label">
                        New Image in seconds
                </div>
                </div>
                <div className="red statistic">
                    <div className="value">
                        {totalCounter}
                    </div>
                    <div className="label">
                        Total time
                </div>
                </div>
            </div>
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
