// Write your code here
import React, {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onStart = () => {
    this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    this.setState({isRunning: true})
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false})
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false, timeElapsedInSeconds: 0})
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = timeElapsedInSeconds % 60
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isRunning} = this.state
    const time = this.getElapsedSecondsInTimeFormat()

    return (
      <div className="stopwatch-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
            className="stopwatch-image"
          />
          <p className="timer-label">Timer</p>
          <h1 className="timer">{time}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button start-button"
              onClick={this.onStart}
              disabled={isRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
