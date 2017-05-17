import { Map, fromJS } from 'immutable'
import { expect } from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {

  it('has an initial state', () => {
    const action = {type: 'SET_ENTRIES', entries: ['Batman']}
    const nextState = reducer(undefined, action)

    expect(nextState).to.equal(fromJS({
      entries: ['Batman'],
      initialEntries: ['Batman']
    }))
  })

  it('can be used with reduce', () => {
    const actions = [
      {type: 'SET_ENTRIES', entries: ['Batman', 'Superman']},
      {type: 'NEXT'},
      {type: 'VOTE', entry: 'Batman', clientId: 'voter1'},
      {type: 'VOTE', entry: 'Superman', clientId: 'voter2'},
      {type: 'VOTE', entry: 'Batman', clientId: 'voter3'},
      {type: 'NEXT'}
    ]
    const finalState = actions.reduce(reducer, Map())
    expect(finalState).to.equal(fromJS({
      winner: 'Batman',
      initialEntries: ['Batman', 'Superman']
    }))
  })

  it('handles SET_ENTRIES', () => {
    const initialState = Map()
    const action = {type: 'SET_ENTRIES', entries: ['Batman']}
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      entries: ['Batman'],
      initialEntries: ['Batman']
    }))
  })

  it('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Batman', 'Superman']
    })
    const action = { type: 'NEXT' }
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        round: 1,
        pair: ['Batman', 'Superman']
      },
      entries: []
    }))
  })

  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        round: 1,
        pair: ['Batman', 'Superman']
      },
      entries: []
    })
    const action = {type: 'VOTE', entry: 'Batman', clientId: 'voter1'}
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        round: 1,
        pair: ['Batman', 'Superman'],
        tally: { Batman: 1 },
        votes: {
          voter1: 'Batman'
        }
      },
      entries: []
    }))
  })
})
