import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Word from './Word'

/* eslint react/prop-types: 0 */
const Timer = ({ timer, value }) => {
/* eslint no-unused-vars: 0 */
  const [imageChangeCounter, setImageChangeCounter] = useState(2)
  const [totalCounter, setTotalCounter] = useState(60)

  useEffect(() => {
    if (timer !== '' && timer !== false && value !== null) {
      const imageChangeCounterInterval = setInterval(() => {
        setImageChangeCounter(imageChangeCounter => imageChangeCounter - 1)
      }, 1000)

      return () => {
        clearInterval(imageChangeCounterInterval)
        setImageChangeCounter(2)
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
    <div className=''>
      <Word value={totalCounter} label='Total time'/>
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
