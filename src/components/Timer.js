import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Timer = ({ timer, value }) => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            setCounter(0)
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
            {timer && <h3>Image changing in {counter} seconds</h3>}
            <br />
            {value && <h3>Total Time remaining {counter1} seconds</h3>}
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