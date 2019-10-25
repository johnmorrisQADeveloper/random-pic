import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Timer = ({ timer, value }) => {
    const [counter, setCounter] = useState(5);
    const [counter1, setCounter1] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            setCounter(5)
        };
    }, [value]);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter1(counter1 => counter1 - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timer, timer !== 60]);
    return (
        <div>
            <br />
            {timer && <span>Image changing in {counter} seconds</span>}
            <br />
            {value && timer && <span>Total Time remaining {counter1} seconds</span>}
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