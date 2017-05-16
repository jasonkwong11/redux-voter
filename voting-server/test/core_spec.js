import { List, Map } from 'immutable'
import { expect } from 'chai'

import { setEntries, next, vote } from '../src/core'

describe('application logic', () => {
  describe('vote', () => {

    it('creates a tally for the voted entry', () => {
      const state = Map({
        pair: List.of('Batman', 'Superman')
      })
      const nextState = vote(state, 'Batman')
      expect(nextState).to.equal(Map({
        pair: List.of('Batman', 'Superman'),
        tally: Map({
          'Batman': 1
        })
      }))
    })

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        pair: List.of('Batman', 'Superman'),
        tally: Map({
          'Batman': 3,
          'Superman': 2
        })
      })
      const nextState = vote(state, 'Batman')
      expect(nextState).to.equal(Map({
        pair: List.of('Batman', 'Superman'),
        tally: Map({
          'Batman': 4,
          'Superman': 2
        })
      }))
    })

  })

  describe('next', () => {
    it('marks winner when one entry left', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Batman', 'Superman'),
          tally: Map({
            'Batman': 4,
            'Superman': 2
          })
        }),
        entries: List()
      })
      const nextState = next(state)
      expect(nextState).to.equal(Map({
        winner: 'Batman'
      }))
    })

    it('puts winner of current vote back into entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Batman', 'Superman'),
          tally: Map({
            'Batman': 4,
            'Superman': 2
          })
        }),
        entries: List.of('Spiderman', 'Thor', 'Aquaman')
      })
      const nextState = next(state)
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Spiderman', 'Thor')
        }),
        entries: List.of('Aquaman', 'Batman')
      }))
    })

    it('puts both from tied vote back into entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Batman', 'Superman'),
          tally: Map({
            'Batman': 3,
            'Superman': 3
          })
        }),
        entries: List.of('Spiderman', 'Thor', 'Aquaman')
      })
      const nextState = next(state)
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Spiderman', 'Thor')
        }),
        entries: List.of('Aquaman', 'Batman', 'Superman')
      }))
    })

    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Batman', 'Superman', 'Spiderman')
      })
      const nextState = next(state)
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Batman', 'Superman')
        }),
        entries: List.of('Spiderman')
      }))
    })
  })


  describe('setEntries', () => {
    it('adds the entries to the state', () => {

      const state = Map();
      const entries = List.of('Batman', 'Superman')
      const nextState = setEntries(state, entries)

      expect(nextState).to.equal(Map({
        entries: List.of('Batman', 'Superman')
      }))
    })
  })
})
