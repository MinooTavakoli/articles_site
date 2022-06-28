const defaultState = {
  helps: [],
  postsData: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_HELPS":
      let _helps = action.value || [];

      return Object.assign({}, state, {
        helps: _helps,
      });

    case "GET_POSTS_DATA":
      let _postsData = action.value || [];

      return Object.assign({}, state, {
        postsData: _postsData,
      });
  }
  return state;
};
