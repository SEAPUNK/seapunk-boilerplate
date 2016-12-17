import React, {Component} from 'react'

class Nice extends Component {
  render () {
    const {isNice, toggleNice} = this.props
    return (
      <div onClick={toggleNice}>
        {isNice ? 'very nice!' : 'not nice'}
      </div>
    )
  }
}

export default Nice
