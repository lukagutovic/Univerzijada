import React from 'react'
import PropTypes from 'prop-types'

const Game = ({game, onDelete, userCanEditGames}) => (  
  <div>
    <li>
      <div >
        <label className="prvi-input">{game.name}</label>
        <label>{game.datum}</label>
        <label>{game.vreme}</label>
        <label>{game.hala}</label>
        {
          userCanEditGames &&
          <button className='delete button' onClick={() => onDelete(game)}>Delete</button>
        }
      </div>
    </li>
  </div>
)

Game.propTypes = {
  game: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  userCanEditGames: PropTypes.bool
}

export default Game
