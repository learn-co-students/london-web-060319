In index.js, wrap App in Provider, this makes the Redux store available to the rest of your app


Create store.js and import it into index.js. Potentially overkill, but it's useful to keep index.js clean.

Create reducer.js, this is where all your state management will go.