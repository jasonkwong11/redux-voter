# Summary
Redux Voter allows users to vote on a list of items to determine single winner.
## How?
The first two items from the list are voted on each round by a simple two button interface. The item that gets more votes in that round is sent back to the end of the list. Then the next round begins.

The last remaining item in the list is the winner!
#### Requirements
  - Allows a users to switch vote after initially clicking button.
  - Allows users to restart the voting round from the beginning.
  - Allows a users to advance to the next round after a voting is complete.
  - Prevents voting on a item not in the current round.
  - Prevents voting more than once.
#### Technical Specifications
  - Uses Socket.io websockets to emit redux actions to the client and server.
  - Includes unit and feature tests with chai and mocha.
  - Uses a unique clientId to track if a user has voted
#### Setup

### Credits

There will be a React browser app that provides a UI for voting. A Node server app will handle the business logic. Redux will be used to organize the application code between the client and server in Immutable data structures.
