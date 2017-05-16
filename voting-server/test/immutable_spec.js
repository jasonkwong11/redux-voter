import { expect } from 'chai'
import { List, Map } from 'immutable'

describe('immutability', () => {

  describe('a tree', () => {
    function addMovie(currentState, movie) {
      return currentState.update(
        'movies',
        movies => movies.push(movie)
      )
      it('is immutable', () => {
        let state = Map({
          movies: List.of('Batman vs Superman', 'Beautiful Mind')
        })
        let nextState = addMovie(state, 'Sunshine')

        expect(nextState).to.equal(Map({
          movies: List.of(
            'Batman vs Superman',
            'Beautiful Mind',
            'Sunshine'
          )
        }))
        expect(state).to.equal(Map({
          movies: List.of(
            'Batman vs Superman',
            'Beautiful Mind'
          )
        }))
      })
    }
  })

  describe('a list', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie)
    }

    it('is immutable', () => {
      let state = List.of('Batman vs Superman', 'Beautiful Mind')
      let nextState = addMovie(state, 'Sunshine')

      expect(nextState).to.equal(List.of(
        'Batman vs Superman',
        'Beautiful Mind',
        'Sunshine'
      ))

      expect(state).to.equal(List.of(
        'Batman vs Superman',
        'Beautiful Mind'
      ))
    })
  })


  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1
    }

    it('is immutable', () => {
      let state = 42
      let nextState = increment(state)

      expect(nextState).to.equal(43)
      expect(state).to.equal(42)
    })
  })
})
