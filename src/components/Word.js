import React from 'react'
/* eslint react/prop-types: 0 */
const Word = ({ value, label }) => {
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
