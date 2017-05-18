## Summary
Redux Voter allows users to vote on a list of items to determine single winner.
### How?
The first two items from the list are voted on each round by a simple two button interface. The item that gets more votes in that round is sent back to the end of the list. Then the next round begins.

The last remaining item in the list is the winner!
#### Requirements
  - Allows a users to switch vote after initially clicking button.
  - Allows users to restart the voting round from the beginning.
  - Allows a users to advance to the next round after a voting is complete.
  - Prevents voting on a item not in the current round.
  - Prevents voting more than once.
  - Announces the winner when there's one item left in the list.
#### Technical Specifications
  - Node + Redux backend, React + Redux frontend
  - Uses ES6, Babel, Socket.io, Webpack, Mocha + Chai
  - Distributed system architecture (not isomorphic app): separate server and client code
  - Communication between client and server is done with Websockets to emit Redux actions
  - Workflow: TDD, unit tested with Mocha and Chai.
#### Getting Started
  1. Fork or clone this repo.
  2. cd into the ```voting-server``` directory.
  3. Update the ```entries.json``` file with your own collection of items to vote on.
  4. Run ```npm install```.
  5. Run ```npm run start```.
  6. Repeat steps 4-5 in the ```voting-client``` directory.
  7. Connect to localhost:8080
  8. You can control the voting process by clicking on the Results button.
  9. Go back to vote on the next item or change your vote by clicking the Vote button.

### Credits

Thanks to Tero Parviainen (@teropa) for creating the amazing tutorial that guided me through the process of creating this app. Thanks to Dan Abramov for creating Redux!
