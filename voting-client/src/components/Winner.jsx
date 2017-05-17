import React from 'react'
import createReactClass from 'create-react-class'
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Winner = createReactClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="winner">
      The winner is: {this.props.winner}!
    </div>
  }
})

export default Winner
