import React from 'react'

const Word = ({value, label}) => {
  return (
    <div>
      <div className="ui statistics">
        <div className="red statistic">
          <div className="value">{value}</div>
          <div className="label">{label}</div>
        </div>
      </div>
    </div>
  )
}

export default Word
