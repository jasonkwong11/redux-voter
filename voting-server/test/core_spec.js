import { List, Map } from 'immutable'
import { expect } from 'chai'

import { setEntries, next, vote } from '../src/core'

describe('application logic', () => {
  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = Map({
        round: 1,
        pair: List.of('Batman', 'Superman')
      })
      const nextState = vote(state, 'Batman')
      expect(nextState).to.equal(Map({
        round: 1,
        pair: List.of('Batman', 'Superman'),
        tally: Map({
          'Batman': 1
        })
      }))
    })

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        round: 1,
        pair: List.of('Batman', 'Superman'),
        tally: Map({
          'Batman': 3,
          'Superman': 2
        })
      })
      const nextState = vote(state, 'Batman')
      expect(nextState).to.equal(Map({
        round: 1,
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
          round: 1,
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
          round: 1,
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
          round: 2,
          pair: List.of('Spiderman', 'Thor')
        }),
        entries: List.of('Aquaman', 'Batman')
      }))
    })

    it('puts both from tied vote back into entries', () => {
      const state = Map({
        vote: Map({
          round: 1,
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
          round: 2,
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
          round: 1,
          pair: List.of('Batman', 'Superman')
        }),
        entries: List.of('Spiderman')
      }))
    })

    it('ignores the vote for an invalid entry', () => {
      expect(
        vote(Map({
          round: 1,
          pair: List.of('Trainspotting', '28 Days Later')
        }), 'Sunshine')
      ).to.equal(
        Map({
          round: 1,
          pair: List.of('Trainspotting', '28 Days Later')
        })
      )
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
