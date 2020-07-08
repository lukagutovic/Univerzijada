import MaterialTable from 'material-table';
import * as gameApi from '../../../../services/gameApi'
import React, { Component } from 'react'

class MaterialTableDemo extends Component {

  constructor () {
    super()

    this.state = {
      games: []
    }

    this.addGame = this.addGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.getGames = this.getGames.bind(this)
  }

  addGame (game) {
    gameApi.addGame(game).then(() => this.getGames())
  }

  deleteGame (game) {
    gameApi.deleteGame(game).then(() => this.getGames())
  }

  setState (game) {
    gameApi.deleteGame(game).then(() => this.getGames())
  }

  getGames () {
    gameApi.getGames().then((games) => {
      this.state.games = games
    }
    )
  }

  componentDidMount () {
    this.getGames()
  console.log(this.state.games)

  }



  // gameApi.getGames().then(r => {
  //   r.game.map((g) => {
  //     state.data.push(g)
  //   }
  //   )
  // })
  render () {
  return (
    
    <MaterialTable
      title="Univerzijada"
      // columns={state.columns}
      columns = { [
        { title: 'Ime', field: 'name' },
        { title: 'Datum', field: 'datum', type: 'date'  },
        { title: 'Vreme', field: 'vreme', type: 'time' },
        { title: 'Hala', field: 'hala'}
      ]}
      data={[]}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.state.games.push(newData)
              return this.state.games
            }, 600);
          }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       if (oldData) {
        //         setState((prevState) => {
        //           const data = [...prevState.data];
        //           data[data.indexOf(oldData)] = newData;
        //           return { ...prevState, data };
        //         });
        //       }
        //     }, 600);
        //   }),
        // onRowDelete: (oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       setState((prevState) => {
        //         const data = [...prevState.data];
        //         data.splice(data.indexOf(oldData), 1);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
      }}
    />
  );
    }
}

export default MaterialTableDemo
