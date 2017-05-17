import React from 'react'
import {List, Map} from 'immutable'

const pair = List.of('Batman', 'Superman')
const tally = Map({'Batman': 5, 'Superman': 4})

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    })
  }
})
