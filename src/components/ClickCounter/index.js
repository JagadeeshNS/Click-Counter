/* eslint-disable react/button-has-type */
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count} </span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>

        <button type="button" className="button" onClick={this.onIncrement}>
          CLick Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
