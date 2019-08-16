import React from 'react'
import { Container, Button, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../adapters/API';

class IndiePokemonShow extends React.Component {

    state = {
        pokemon: null
    }

    componentDidMount() {
        API.getPokemon(this.props.match.params.id)
            .then(pokemon => this.setState({ pokemon }))
    }

    render() {

        if (!this.state.pokemon) {
            return <Container>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            </Container>
        }

        const hp = this.state.pokemon.stats.find(stat => stat.name === 'hp')
        const speed = this.state.pokemon.stats.find(stat => stat.name === 'speed')
        const { front, back } = this.state.pokemon.sprites

        return (
            <Container>
                <div>
                    <div className="image">
                        <img alt="oh no!" src={front} />
                    </div>
                    <div className="image">
                        <img alt="oh no!" src={back} />
                    </div>
                    <div className="content">
                        <div className="header">{this.state.pokemon.name}</div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="icon heartbeat red" />
                            {hp.value}
                        </span>
                        <span>
                            <i className="icon lightning yellow" />
                            {speed.value}
                        </span>
                    </div>
                </div>
                <Button as={Link} to="/" >Back to all</Button>

            </Container>
        )
    }
}

export default IndiePokemonShow
