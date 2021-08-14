import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showingBack: false
  }

  handleClick = (prevState) => {
    this.setState({
      showingBack: !prevState.showingBack
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" key={this.props.pokemon.id} onClick={this.handleClick}>
            <img src={this.state.showingBack ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
