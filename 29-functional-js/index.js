/*
  *** Functional JS: ***
  Little program showing how one could push side-effects to the side.
  
  input -> transformation -> output
  
  Input and output are side-effects, but the transformation is pure.
*/

// type: impure
// returns data wrapped in a promise
// note: the DATA variable is created in data.js
const getData = async () => DATA

// type: pure
// takes: many functions
// returns: a function that takes a value and passes it through those functions
const pipe = (...funcs) => x => funcs.reduce((val, func) => func(val), x)

// type: pure
// takes: the name of a key/property
// returns: a function that takes an object and finds the prop given
const prop = propName => object => object[propName]

// type: pure
// takes: an object
// returns: the 'pokemons' key of that object
const getPokemons = prop('pokemons')

// type: pure
// takes: a single pokemon object
// returns: an html pokemon string
const makePokeCard = pokemon => `
  <div>
    <img src="${pokemon.sprites.front}" />
    <h3>${pokemon.name}</h3>
  </div>
`

// type: pure
// takes: an array of pokemon objects
// returns: an html string with all the pokemon elements
const makePokeCards = pokemons =>
  pokemons.map(makePokeCard).join('')

// type: pure
// takes: an html string
// returns: the same string with an added navbar element above
const addNavBar = html => `
  <nav>NavBar!</nav>
  ${html}
`

// type: pure
// takes: an html string
// returns: the same string with an added footer element below
const addFooter = html => `
  ${html}
  <footer>Footer!</footer>
`

// type: pure
// takes: an object
// returns: an html string with all the transformations applied
const turnPokemonDataIntoHtml = pipe(
	getPokemons,
	makePokeCards,
	addNavBar,
	addFooter
)

// type: impure
// takes: an html string
// side-effect: replaces the current html on the page with it
// returns: nothing
const replaceBody = html => {
  document.body.innerHTML = html
}

/*
main function:
this is the only function we actually call
it uses all of the other functions combined to achieve its goal
*/
const main = () => {
  getData() // input: impure
    .then(turnPokemonDataIntoHtml) // transformation: pure
    .then(replaceBody) // output: impure
}

main()