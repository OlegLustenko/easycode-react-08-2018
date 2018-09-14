// {
//   type: 'ADD_SERVER',
//   payload: {
//     server: '...'
//  }
// }
export const ADD_SERVER = 'add_server';

export const addServer = (server) => {
  return {
    type: ADD_SERVER,
    payload: {
      server
    }
  };
};
