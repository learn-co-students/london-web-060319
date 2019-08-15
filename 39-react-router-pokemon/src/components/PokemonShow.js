import React from 'react'
import { Container, Button, Dimmer, Loader } from 'semantic-ui-react'

class PokemonShow extends React.Component {

    render() {

        if (this.props.loading) {
            return <Container>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            </Container>
        }

        const hp = this.props.stats.find(stat => stat.name === 'hp')
        const speed = this.props.stats.find(stat => stat.name === 'speed')
        const { front, back } = this.props.sprites

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
                        <div className="header">{this.props.name}</div>
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
                <Button onClick={this.props.back}>Back to all</Button>
            </Container>
        )
    }
}

export default PokemonShow
