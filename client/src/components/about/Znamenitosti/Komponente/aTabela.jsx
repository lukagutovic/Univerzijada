import React from 'react';
import MaterialTable from 'material-table';
import * as gameApi from '../../../../services/gameApi'

export default function MaterialTableDemo({data, header}) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Ime', field: 'name' },
      { title: 'Datum', field: 'datum', type: 'date'  },
      { title: 'Vreme', field: 'vreme', type: 'time' },
      { title: 'Hala', field: 'hala'}
    ],  
    data: [
      
    ]
  });

  return (
    
    <MaterialTable
      title="Univerzijada"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                gameApi.getGames().then(r => {
                  r.game.map((g) => {
                    data.push(g)
                  }
                  )
                  gameApi.addGame(newData)
                })
                return { ...prevState, data };
                
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
