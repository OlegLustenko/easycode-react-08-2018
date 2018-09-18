export const incrementCounter = (payload) => {
  return {
    type: 'INCREMENT',
    payload,
  };
};

const goToServer = (payload) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

export const incrementAsyncCounter = (payload) => {
  /* сходить на сервер -> */

  return (dispatch, getState) => {
    goToServer().then(() => {
      dispatch({
        type: 'ASYNC_INCREMENT',
        payload,
      });
    });
  };

  // return {
  //   type: 'INCREMENT',
  //   payload,
  // };
};
