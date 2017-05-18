import React from 'react'
import createReactClass from 'create-react-class'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const Vote = createReactClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pair || []
  },
  isDisabled: function() {
    return !!this.props.hasVoted
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry
  },
  render: function() {
    return <div className="voting" style={{ textAlign: 'center' }}>
      {this.getPair().map(entry =>
        <button
          style={{
            backgroundColor: 'lightblue',
            border: 'none',
            color: 'white',
            padding: '5px',
            margin: '15px',
            display: 'inline-block',
            textAlign: 'center',
            fontSize: '24px'
          }}
          key={entry}
          onClick={() => this.props.vote(entry)}
        >
          <h1>{entry}</h1>
          {this.hasVotedFor(entry) ?
            <div className="label">Voted</div> :
          null}
        </button>

      )}
    </div>
  }
})

export default Vote
