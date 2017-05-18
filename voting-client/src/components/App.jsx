import React from 'react'

export default class App extends React.Component{
  render(){
    return <div>
      <h1 style={{ textAlign: 'center' }}>Redux Voter</h1>
      <hr/>
        {this.props.children}
    </div>
  }
}
