import React from 'react'

export default class App extends React.Component{
  render(){
    return <div>
      <nav>
        <a href="/"><button type="button">Vote</button></a>
        <a href="#/results"><button type="button">Results</button></a>
      </nav>
      <h1 style={{ textAlign: 'center' }}>Redux Voter</h1>
      <hr/>
        {this.props.children}
    </div>
  }
}
