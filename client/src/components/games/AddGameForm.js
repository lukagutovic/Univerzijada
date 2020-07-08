import React, { Component } from 'react'
import Tabela from '../about/Znamenitosti/Komponente/aTabela'
import * as gameApi from '../../services/gameApi'

class AddGameForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = [] 
//     gameApi.getGames().then(r => {
//       console.log(r.game)
//       this.state =   r.game
//      })
// }
  render () {
 
     return (
      <div className="form-wrapper">
    <Tabela />
      </div>
    )
  
  }
}

export default AddGameForm
